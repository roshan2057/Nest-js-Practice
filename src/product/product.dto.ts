import { IsNumber, IsString } from "class-validator";


export class Productdto {
    @IsString()
    name: string;
    @IsNumber()
    price: number;
    @IsNumber()
    quantity: number;
    @IsNumber()
    category: number;
    @IsNumber()
    sub_category: number;
}