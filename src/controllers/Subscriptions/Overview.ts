import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import { getConnection } from 'typeorm';
import { Items } from "../../entity/Items";

export class OverviewController extends CrudController {
  async create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): Promise<void> {
    const subscriptions = await getConnection().manager.query('SELECT COUNT(distinct "usersEmail") as "subscribers" FROM "items_users_users"');
    res.send(subscriptions[0])
  }

  public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
    throw new Error("Method not implemented.");
  }

  async delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): Promise<void> {
    throw new Error("Method not implemented.");

  }
}
