import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { SubCategoryService } from './sub_category.service';
import { SubCategorydto } from './sub_category.dto';

@Controller('sub-category')
export class SubCategoryController {
    constructor(
        private subcategoryservice:SubCategoryService
    ){}
    @Get()
    getsubcategory():any{
        return this.subcategoryservice.getall();
    }
    @Post()
    createsubcategory(@Body(new ValidationPipe()) data:SubCategorydto){
return this.subcategoryservice.create(data);
    }
}
