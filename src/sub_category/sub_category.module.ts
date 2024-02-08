import { Module } from '@nestjs/common';
import { SubCategoryService } from './sub_category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubCategoryEntity } from './sub_category.entity';
import { SubCategoryController } from './sub_category.controller';
import { CategoryEntity } from 'src/category/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubCategoryEntity, CategoryEntity])],
  controllers: [SubCategoryController],
  providers: [SubCategoryService],

})
export class SubCategoryModule { }
