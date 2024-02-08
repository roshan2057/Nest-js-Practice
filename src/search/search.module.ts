import { Module } from "@nestjs/common";
import { SearchController } from "./search.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "src/product/product.entity";
import { SearchService } from "./search.service";


@Module({
    imports:[TypeOrmModule.forFeature([ProductEntity])],
    controllers:[SearchController],
    providers:[SearchService]
})
export class SearchModule{

}