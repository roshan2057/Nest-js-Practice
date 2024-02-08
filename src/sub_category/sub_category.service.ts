import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubCategoryEntity } from './sub_category.entity';
import { Repository } from 'typeorm';
import { SubCategorydto } from './sub_category.dto';
import { CategoryEntity } from 'src/category/category.entity';

@Injectable()
export class SubCategoryService {
    constructor(
        @InjectRepository(SubCategoryEntity) private subcategoryrepository: Repository<SubCategoryEntity>,
        @InjectRepository(CategoryEntity) private categoryrepository: Repository<CategoryEntity>
    ) { }
    getall() {
        return this.subcategoryrepository.find();
    }

    async create(data: SubCategorydto): Promise<{ message: string, statusCode: number }> {
        const subcategory = new SubCategoryEntity();
        subcategory.name = data.name;
        const category = await this.categoryrepository.findOne({ where: { cat_id: data.category } })
        if (!category) {
            throw new NotFoundException("Category not found")
        }
        subcategory.category = category;
        await this.subcategoryrepository.save(subcategory)
        return { message: "Created", statusCode: HttpStatus.CREATED }
    }
   async getbyid(id:number){
        const data = await this.subcategoryrepository.find({where:{sub_id:id}})
        return data
    }
}
