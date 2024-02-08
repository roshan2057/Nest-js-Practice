import { Body, Controller, Get, Injectable, Post, ValidationPipe } from "@nestjs/common";
import { Productdto } from "./product.dto";
import { ProductService } from "./product.service";

@Controller("product")
export class ProductController {
    constructor(
        private productservice: ProductService
    ) { }
    @Get()
    getproduct(): any {
        return this.productservice.getallproduct()
    }
    @Post()
    createproduct(@Body(new ValidationPipe()) data: Productdto): any {
        return this.productservice.createproduct(data)
    }
}