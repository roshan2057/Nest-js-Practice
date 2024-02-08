import { IsString } from "class-validator";

export class Categorydto {
    @IsString()
    name: string;
}