import { CategoryEntity } from "src/category/category.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("sub_category")
export class SubCategoryEntity {
    @PrimaryGeneratedColumn()
    sub_id: number;
    @Column()
    name: string;
    @ManyToOne(() => CategoryEntity, category => category.cat_id)
    @JoinColumn({ name: 'cat_id' })
    category: CategoryEntity;
}
