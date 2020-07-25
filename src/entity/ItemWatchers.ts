import {ViewEntity, ViewColumn} from 'typeorm';

@ViewEntity({
    expression: `Select items.name as name, items.link as link, items.id as id, COUNT(items_users_users."usersEmail") as watchers from items left outer join items_users_users on items_users_users."itemsId" = items.id group by items.id`
})
export class ItemWatchers {

    @ViewColumn()
    id!: number;

    @ViewColumn()
    name!: string;

    @ViewColumn()
    watchers!: number;

    @ViewColumn()
    link!: string;

}
