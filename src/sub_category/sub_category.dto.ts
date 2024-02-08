import { IsNumber, IsString } from "class-validator";

export class SubCategorydto {
    @IsString()
    name: string;
    @IsNumber()
    category: number
}