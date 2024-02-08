import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { CategoryEntity } from "src/category/category.entity";
import { SubCategoryEntity } from "src/sub_category/sub_category.entity";

@Module({
    imports:[TypeOrmModule.forFeature([ProductEntity, CategoryEntity, SubCategoryEntity])],
    controllers:[ProductController],
    providers:[ProductService]
})
export class ProductModule{

}