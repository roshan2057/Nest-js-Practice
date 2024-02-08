import { CategoryEntity } from "src/category/category.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SubCategoryEntity } from "src/sub_category/sub_category.entity";


@Entity("product")
export class ProductEntity {
    @PrimaryGeneratedColumn()
    product_id: number;

    @Column()
    name: string;
    @Column()
    price: number;
    @Column()
    quantity: number;

    @ManyToOne(() => CategoryEntity, category => category.cat_id)
    @JoinColumn({ name: 'cat_id' })
    category: CategoryEntity;


    @ManyToOne(() => SubCategoryEntity, sub_category => sub_category.sub_id)
    @JoinColumn({ name: 'sub_id' })
    sub_category: SubCategoryEntity;

}