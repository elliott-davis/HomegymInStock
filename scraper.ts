import axios from "axios";
import cheerio from "cheerio";
import { setIntervalAsync } from 'set-interval-async/dynamic';

import {Connection, createConnection, getConnection, getManager, IsNull, Not} from "typeorm";
import {Items} from "./src/entity/Items";

import { useless_items } from './useless-items';
import { getRequestDataFromJS } from './helper';
import AWS from "aws-sdk";
import {Users} from "./src/entity/User";

AWS.config.update({region: 'us-east-1'});

createConnection().then(async (connection: Connection) => {
    try {
      await setIntervalAsync(async () => { await handleAllURLs() }, 30 * 1000);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}).catch(error => console.log(error));

async function wait(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function handleAllURLs() {
    const search_urls: Items[] = await getManager().getRepository(Items).createQueryBuilder('items')
        .innerJoinAndSelect('items.users', 'user').getMany()
  for (const item of search_urls) {
    // Skips items no one is looking for
    // if (Object.keys(search_urls[item]["sender_ids"]).length == 0) {
    //   // console.log(`Skipping ${item}`)
    //   continue;
    // }
    let data = await getDataFromURL(item);
    let item_str = "";
    let write_item_str = "";
    let in_stock_count = 0;
    let rand_string = Math.random().toString(36).substring(7);

    // Loop through each item on page
    data.forEach((singleItem: any) => {
      let avail = decodeURI("\u2705");

      // Check if data returned is empty
      if (Object.keys(singleItem).length == 0) {
        return;
      }

      // Out of stock
      if (
        singleItem["in_stock"].indexOf("Notify Me") >= 0 ||
        singleItem["in_stock"].indexOf("Out of Stock") >= 0 ||
        singleItem["in_stock"].indexOf("OUT OF STOCK") >= 0 ||
        singleItem["in_stock"] === ''
      ) {
        // Cross emoji
        avail = decodeURI("\u274C");
      }
      // In stock
      else {
        // Check emoji
        avail = decodeURI("\u2705");
        in_stock_count += 1;
        write_item_str += singleItem["name"] + " " + avail + ", ";
        item_str +=
          singleItem["name"] +
          "\n" +
          singleItem["price"] +
          "\nIn stock: " +
          avail +
          "\n \n";
        // Update item's last availablity to current time
        // TODO: figure this out
        // search_urls[item]["last_avail"] = new Date();
        // Create the promise and SES service object
        sendEmail(item)
      }
      // item_str +=
      //   item["name"] + "\n" + item["price"] + "\nIn stock: " + avail + "\n \n";
    });

    // No items found, everything sold out
    if (item_str === "") {
      item_str = "Everything currently out of stock.\n\n";
      write_item_str = "Everything currently out of stock.";
    }

    // Set date
    // var today = new Date();
    // var date =
    //   today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
    // var time = today.toLocaleString("en-US", {
    //   hour: "numeric",
    //   minute: "numeric",
    //   second: "numeric",
    //   hour12: true,
    // });
    // var dateTime = time + " EST " + date;

    // Checks if item has been checked
    // if (!("prev_stock_count" in search_urls[item])) {
    //   search_urls[item]["prev_stock_count"] = in_stock_count;
    // }
    // // If item was in stock, but is now out of stock
    // else if (in_stock_count == 0 && search_urls[item]["prev_stock_count"] > 0) {
    //   let write_line = `${dateTime} | ${search_urls[item]["product_name"]} | ${write_item_str} | ${search_urls[item]["link"]}\n`;
    //   try {
    //     if (write_item_str != "") {
    //       // TODO - write to db
    //       // fs.appendFile("stock-log.txt", write_line, (error) => {
    //       //   if (error) throw error;
    //       //   console.log(`Wrote update on ${item} to file`);
    //       // });
    //     }
    //   } catch (error) {
    //     console.error(`Could not write to file`);
    //   }
    // }
    // // Difference in stock count
    // else if (in_stock_count != search_urls[item]["prev_stock_count"]) {
    //   console.log("Response msg: Update in stock");
    //   // Send response to every user
    //   for (let sender_id in search_urls[item]["sender_ids"]) {
    //     // Response message
    //     let response = {
    //       text:
    //         `RESTOCK: "${item}"\n` +
    //         `Match found for: "${search_urls[item]["product_name"]}".\n` +
    //         `Currently searching ${
    //           Object.keys(user_id_dic[sender_id]["products"]).length
    //         }/${item_limit} items` +
    //         "\n\n" +
    //         item_str +
    //         `Checked On ${dateTime}\n` +
    //         `Original link:\n${search_urls[item]["link"]}\n\n` +
    //         `Non-cached link:\n${
    //           search_urls[item]["link"] + "?=" + rand_string
    //         }\n\n` +
    //         `If this bot has helped you get your items please consider donating!\npaypal.me/roguestockbot`,
    //     };
    //     // callSendAPI(sender_id, response);
    //   }
    //   let write_line = `${dateTime} | ${search_urls[item]["product_name"]} | ${write_item_str} | ${search_urls[item]["link"]}\n`;
    //   try {
    //     if (write_item_str != "") {
    //       // TODO - Write to db
    //       // fs.appendFile("stock-log.txt", write_line, (error) => {
    //       //   if (error) throw error;
    //       //   console.log(`Wrote update on ${item} to file`);
    //       // });
    //     }
    //   } catch (error) {
    //     console.error(`Could not write to file`);
    //   }
    // }
    // // Update prev stock to current stock
    // search_urls[item]["prev_stock_count"] = in_stock_count;
  }
}

// Parses HTML from URL and returns data structure containing relevent data
async function getDataFromURL(item: Items): Promise<any> {
  try {
    let response = await axios.get(item.link);
    let redirect_count = response.request._redirectable._redirectCount;

    // console.log("Looking for: " + item);
    // console.log(redirect_count);
    // console.log("Web scraping data from: " + item_link);
    let $ = cheerio.load(response.data);
    let items: any[] = [];

    // Multiple items in a page
    if (item.type === "multi") {
      $(".grouped-item").each(function (index, element) {
        let item_name = $(element).find(".item-name").text();
        items[index] = {};
        // Check for useless items
        if (useless_items.indexOf(item_name) >= 0) {
          return;
        }
        items[index]["name"] = $(element).find(".item-name").text();
        items[index]["price"] = $(element).find(".price").text();
        items[index]["in_stock"] = $(element)
          .find(".bin-stock-availability")
          .text();
      });
    } else if (item.type === "bone") {
      // Boneyard page exists
      if (redirect_count == 0) {
        $(".grouped-item").each(function (index, element) {
          items[index] = {};
          items[index]["name"] = $(element).find(".item-name").text();
          items[index]["price"] = $(element).find(".price").text();
          items[index]["in_stock"] = $(element)
            .find(".bin-stock-availability")
            .text();
        });
      } else {
        items[0] = {};
        items[0]["in_stock"] = "Notify Me";
      }
    } else if (item.type === "grab bag") {
      // Boneyard page exists
      if (redirect_count == 0) {
        items[0] = {};
        items[0]["in_stock"] = "Add to cart";
      } else {
        items[0] = {};
        items[0]["in_stock"] = "Notify Me";
      }
    } else if (item.type === "cerakote") {
      items = getRequestDataFromJS(response.data, "relatedColorSwatches");
    } else if (item.type === "monster bench") {
      var obj = $("script[type='text/javascript']");
      let info: any[] = [];
      loop1: for (var i in obj) {
        for (var j in obj[i].children) {
          var data = obj[i].children[j].data;
          if (data && data.includes("RogueColorSwatches")) {
            data = data.substring(
              data.indexOf("RogueColorSwatches"),
              data.length
            );
            var split_data = data.split(/[[\]]{1,2}/);
            split_data.forEach((item) => {
              if (item.includes("additional_options")) {
                var stripped_str = item.substring(
                  item.indexOf("{"),
                  item.lastIndexOf("realLabel") - 2
                );
                info.push(JSON.parse(stripped_str));
              }
            });
            break loop1;
          }
        }
      }
      info = info.slice(0, 2);
      info.forEach((element, index) => {
        Object.keys(element).forEach((mini_item, index2) => {
          items[index * 3 + index2] = {};
          items[index * 3 + index2]["name"] =
            element[mini_item]["product_name"];
          items[index * 3 + index2]["in_stock"] = element[mini_item][
            "isInStock"
          ]
            ? "Add to Cart"
            : "Notify Me";
          items[index * 3 + index2]["price"] = $(".price").first().text();
        });
      });
    } else if (item.type === "rmlc") {
      var obj = $("script[type='text/javascript']");
      let info: any[] = [];
      loop1: for (var i in obj) {
        for (var j in obj[i].children) {
          var data = obj[i].children[j].data;
          if (data && data.includes("RogueColorSwatches")) {
            data = data.substring(
              data.indexOf("RogueColorSwatches"),
              data.length
            );
            var split_data = data.split(/[[\]]{1,2}/);
            split_data.forEach((item) => {
              if (item.includes("additional_options")) {
                var stripped_str = item.substring(
                  item.indexOf("{"),
                  item.lastIndexOf("realLabel") - 2
                );
                info.push(JSON.parse(stripped_str));
              }
            });
          }
        }
      }
      info = info.slice(0, 11);
      info.forEach((element, index) => {
        Object.keys(element).forEach((mini_item, index2) => {
          let label = element[mini_item]["label"];
          let name_label = label.substring(0, label.indexOf("("));
          let dic = {
            name:
              index2 == 0 ? name_label + "Standard" : name_label + "Numbered",
            in_stock: element[mini_item]["isInStock"]
              ? "Add to Cart"
              : "Notify Me",
            price: $(".price").first().text(),
          };
          items.push(dic);
        });
      });
    } else if (item.type === "db15") {
      items = getRequestDataFromJS(response.data, "RogueColorSwatches", 2);
    } else if (item.type === "custom") {
      items = getRequestDataFromJS(response.data, "ColorSwatches");
    } else if (item.type === "ironmaster") {
      items[0] = {};
      items[0]["name"] = $(".product_title").text();
      items[0]["price"] = "N/A";
      items[0]["in_stock"] = $("span.stock").text();
    }
    // Just one item in a page
    else {
      items[0] = {};
      items[0]["name"] = $(".product-title").text();
      items[0]["price"] = $(".price").text();
      items[0]["in_stock"] = $(".product-options-bottom button").text();
    }
    return items;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

async function sendEmail(item: Items) {
  let sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail({
    Destination: {
      BccAddresses: item.users.map(user => user.email)
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<p><a href="${item.link}"> ${item.name}</a> is in stock!</p><p>Your subscription has now been removed.
To resubscribe, go to <a href="https://homegym-instock.herokuapp.com">homegym-instock</a>.</p><p>If you've found this
service useful, consider helping me cover server costs (or buying me some flecks) <a href="paypal.me/excellentio">paypal.me/excellentio</a>.</p>`
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `${item.name} In-Stock`
      }
    },
    Source: 'no-reply@excellent.io',
  }).promise();

  // Handle promise's fulfilled/rejected states
  sendPromise.then(
      function(data) {
        console.log(data.MessageId);
        item.users.forEach(user =>  {
          getConnection()
            .createQueryBuilder()
            .relation(Users, 'items')
            .of(user.email)
            .remove(item.id);
            console.log(`Removed ${user.email} from ${item.name}`);
        })
      }).catch(
      function(err) {
        console.error(err, err.stack);
      });
  console.log(item);
}

// function getTimeDiff(start_time) {
//   var curr_time = new Date();
//   var time_elapsed = (curr_time - start_time) / 1000;
//
//   var seconds = Math.round(time_elapsed % 60);
//   // remove seconds from the date
//   time_elapsed = Math.floor(time_elapsed / 60);
//
//   // get minutes
//   var minutes = Math.round(time_elapsed % 60);
//
//   // remove minutes from the date
//   time_elapsed = Math.floor(time_elapsed / 60);
//
//   // get hours
//   var hours = Math.round(time_elapsed % 24);
//
//   // remove hours from the date
//   time_elapsed = Math.floor(time_elapsed / 24);
//   var time_elapsed_str = `${time_elapsed} days ${hours}:${minutes}:${seconds}`;
//   return time_elapsed_str;
// }
