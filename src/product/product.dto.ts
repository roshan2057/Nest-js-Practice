import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";


export class Productdto {
    @IsString()
    @ApiProperty({
        description: 'Name of the product',
        default: "Prduct name",
      })
    name: string;

    @ApiProperty({
        default:5000,
        description:"Price of the Product"
    })
    @IsNumber()
    price: number;

    @ApiProperty({
        default:20,
        description:"Quantity of the product"
    })
    @IsNumber()
    quantity: number;

    @ApiProperty({
        name:"category",
        description:"Category id from the category table"
    })
    @IsNumber()
    category: number;

    @ApiProperty({
        name:"sub_category",
        description:"Sub_category id from the Sub_category table"
    })
    @IsNumber()
    sub_category: number;
}