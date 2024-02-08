import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('category')
export class CategoryEntity{
    @PrimaryGeneratedColumn()
    cat_id:number
    @Column()
    name:string;
}