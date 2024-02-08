import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Categorydto } from './category.dto';

@Controller('category')
export class CategoryController {
    constructor(
        private categoryservice:CategoryService
    ){}
    @Get()
    getall():any{
        return this.categoryservice.getcategory();
    }
    @Post()
    store(@Body(new ValidationPipe()) data:Categorydto){
        return this.categoryservice.createcategory(data)
    }
}
