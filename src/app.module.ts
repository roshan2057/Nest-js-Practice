import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { CategoryModule } from './category/category.module';
import { SubCategoryModule } from './sub_category/sub_category.module';
import { ProductModule } from './product/product.module';
import { SearchModule } from './search/search.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // In development, set to false in production
    }),
    ProductModule,
    CategoryModule,
    SubCategoryModule,
    SearchModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
