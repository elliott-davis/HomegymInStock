import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import {getConnection, getManager} from 'typeorm';
import { Users } from'../../entity/User';
import {Items} from "../../entity/Items";

export class SubscriptionController extends CrudController {
    async create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): Promise<void> {
      await getConnection()
        .getRepository(Users)
        .save({ email: req.body.email, name: req.body.name });

        await getConnection()
            .createQueryBuilder()
            .relation(Items, 'users')
            .of(req.body.id)
            .add(req.body.email);
        res.send('null');
        res.status(201).end();
    }

    async read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): Promise<void> {
        throw new Error("Method not implemented.");
    }

    public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }

    async delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .relation(Users, 'items')
            .of(req.body.email)
            .remove(req.body.id);
        res.send('null')
        res.status(200)
    }
}
