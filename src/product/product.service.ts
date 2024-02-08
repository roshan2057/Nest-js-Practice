import { BadRequestException, HttpException, Injectable } from "@nestjs/common";
import { Productdto } from "./product.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { Repository } from "typeorm";
import { CategoryEntity } from "src/category/category.entity";
import { SubCategoryEntity } from "src/sub_category/sub_category.entity";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(CategoryEntity) private categoryrepository: Repository<CategoryEntity>,
        @InjectRepository(SubCategoryEntity) private sub_categoryrepository: Repository<SubCategoryEntity>,
        @InjectRepository(ProductEntity) private productrepository: Repository<ProductEntity>
    ) { }
    async getallproduct(): Promise<any> {
        // const products = await this.productrepository
        // .createQueryBuilder("product")
        // .innerJoin("product.category", "category")
        // .innerJoin("product.sub_category", "sub_category")
        // .select([
        //     "product.product_id",
        //     "product.name",
        //     "product.price",
        //     "product.quantity",
        //     "category.name", // Add other fields as needed
        //     "sub_category.name", // Add other fields as needed
        // ])
        // .getMany();


        const products = await this.productrepository.query(`
        SELECT 
            product.product_id,
            product.name,
            product.price,
            product.quantity,
            category.name as category,
            sub_category.name as sub_category
        FROM 
            product
        INNER JOIN 
            category ON product.cat_id = category.cat_id
        INNER JOIN 
            sub_category ON product.sub_id = sub_category.sub_id
    `);
        return products

    }
    async createproduct(data: Productdto): Promise<string> {
        const product = new ProductEntity();
        product.name = data.name;
        product.price = data.price;
        product.quantity = data.quantity;
        const category = await this.categoryrepository.findOne({ where: { cat_id: data.category } });
        const sub_category = await this.sub_categoryrepository.findOne({ where: { sub_id: data.sub_category } });
        if (!category) {
            throw new BadRequestException("Category not found");
        }
        if (!sub_category) {
            throw new BadRequestException("Sub-Category not found")
        }
        product.category = category;
        product.sub_category = sub_category;
        console.log(product)
        await this.productrepository.save(product)
        return "Created"
    }
}