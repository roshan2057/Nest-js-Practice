import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class SubCategorydto {

    @ApiProperty({
        default:"Sub_Category"
    })
    @IsString()
    name: string;

    @ApiProperty({
        name:'category',
        description:"Category id from the category table"
    })
    @IsNumber()
    category: number
}