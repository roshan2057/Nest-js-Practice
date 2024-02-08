import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "src/product/product.entity";
import { Repository } from "typeorm";

@Injectable()
export class SearchService {
    constructor(
        @InjectRepository(ProductEntity) private productrepository: Repository<ProductEntity>,
    ) { }

    async Search(key: string): Promise<{
        product_id: number,
        name: string,
        price: number,
        quantity: number,
        category: {
            cat_id: number,
            name: string
        },
        sub_category: {
            sub_id: number,
            name: string
        }
    }[]> {
        // const results = await this.productrepository.query(`
        // SELECT 'product' as type, product.product_id, product.name, product.price, product.quantity
        //     FROM product
        //     WHERE name LIKE '%${key}%'            
        //     UNION ALL            
        //     SELECT 'category' as type, category.cat_id, category.name, NULL as price, NULL as quantity
        //     FROM category
        //     WHERE name LIKE '%${key}%'            
        //     UNION ALL            
        //     SELECT 'subCategory' as type, sub_category.sub_id, sub_category.name, NULL as price, NULL as quantity
        //     FROM sub_category
        //     WHERE name LIKE '%${key}%'
        // `);

        const results = await this.productrepository.createQueryBuilder('product')
            .leftJoinAndSelect('product.category', 'category')
            .leftJoinAndSelect('product.sub_category', 'subCategory')
            .where('product.name ILike :key OR category.name ILike :key OR subCategory.name ILike :key', { key: `%${key}%` })
            .getMany();
        return results
    }
}