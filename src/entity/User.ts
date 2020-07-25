import {Entity, Column, PrimaryColumn, ManyToMany} from 'typeorm';
import {Items} from "./Items";

@Entity()
export class Users {
    @PrimaryColumn({unique: true, type: "text"})
    email!: string;

    @Column({type: "text"})
    name!: string;

    @ManyToMany(type => Items, item => item.users)
    items!: Items[];
}
