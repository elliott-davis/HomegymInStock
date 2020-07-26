"use strict";

import {router} from "./src/routes/Item/Item";

require("dotenv").config();
import "reflect-metadata";
import express from "express";
import { createConnection } from 'typeorm';

import {itemsRouter, subscriptionRouter} from './src/routes';
import {authCheck, authOptional} from "./src/auth";
import path from "path";
const app = express();
app.use(express.json());
const expressRouter = express.Router();
app.get("/external", authCheck, (req, res) => {
  res.send({
    msg: "Your Access Token was successfully validated!"
  });
});

app.use(express.static(path.join(__dirname, 'web/dist/homegym-stock-service')));

expressRouter.use('/items', authOptional, itemsRouter)
expressRouter.use('/subscription', authCheck, subscriptionRouter)
app.use('/api', expressRouter);
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'web/dist/homegym-stock-service/index.html'));
});


// creates express http server
let useSSL = false
// if ( process.env.DATABASE_URL) {
//   useSSL = true;
// }

createConnection().then(connection => {
  const port = process.env.PORT || 1337
// Sets server port and logs message on success
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    try {
      // setInterval(handleAllURLs, delay * 1000);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  });
}).catch(error => console.log(error));
