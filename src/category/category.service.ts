import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { Repository } from 'typeorm';
import { Categorydto } from './category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryEntity) private categoryrepository: Repository<CategoryEntity>
    ) { }

    getcategory() {
        return this.categoryrepository.find();
    }

    async createcategory(data: Categorydto): Promise<string> {
        await this.categoryrepository.save(data)
        return "created"
    }


}
