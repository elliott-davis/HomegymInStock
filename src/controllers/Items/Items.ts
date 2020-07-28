import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import { getManager } from 'typeorm';
import { Users } from'../../entity/User';
import { Items } from "../../entity/Items";

export class ItemsController extends CrudController {
    async create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): Promise<void> {
        // get a post repository to perform operations with post
        const itemsRepository = getManager().getRepository(Users);

        // load a post by a given post id
        const items = await itemsRepository.find();

        // return loaded posts
        res.send(items);
    }

    public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }

    public delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }

    async list(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): Promise<void> {
        const itemWatchers = getManager().getRepository(Items)
            .createQueryBuilder('items')
            .leftJoinAndSelect('items.users', 'user')
            .select('items.id', 'id')
            .addSelect('items.name', 'name')
            .addSelect('items.link', 'link')
            .addSelect('COUNT(user.email)', 'watchers')
            .groupBy('items.id')

        // @ts-ignore
        if ( 'user' in req && 'https://homegym.excellent.io email' in req.user ) {
            // @ts-ignore
            itemWatchers.addSelect(`bool_or(user.email = '${req.user['https://homegym.excellent.io email']}')`, 'isSubscribed');
        }
        res.send(await itemWatchers.getRawMany())
    }}
