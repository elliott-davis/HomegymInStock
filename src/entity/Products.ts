import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {Items} from "./Items";

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "text"})
    name!: string;

    @Column({type: "timestamptz", nullable: true})
    lastAvailable!: string;


    @Column({default: 0})
    numAvailable!: number;

    @ManyToOne(type => Items, item => item.products)
    item!: Items;
}
