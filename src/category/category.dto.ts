import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class Categorydto {

    @ApiProperty({
        default:"Name"
    })
    @IsString()
    name: string;
}