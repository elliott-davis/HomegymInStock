import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, Index} from 'typeorm';
import {Users} from "./User";
import {Products} from "./Products";

@Entity()
export class Items {
    @PrimaryGeneratedColumn()
    id!: number;

    @Index()
    @Column({type: "text"})
    name!: string;

    @Column({unique: true})
    link!: string;

    @Column({type: "timestamptz", nullable: true})
    lastAvailable!: string;

    @Column({type: "text"})
    type!: string;

    @Column({default: 0})
    numAvailable!: number;

    @ManyToMany(type => Users, user => user.items)
    @JoinTable()
    users!: Users[];

    @OneToMany(type => Products, product => product.item)
    products!: Products[];
}
