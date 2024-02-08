import { BadRequestException, Body, Controller, Get, Param, Patch, Post, Put, Query, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./user.dto";

@Controller('user')
export class UserController {
    constructor(private userservice: UserService) { }
    @Get()
    
    home() {
        console.log("get routes")
        return this.userservice.getalluser();
    }

    @Post()
    create(@Body(new ValidationPipe()) data: UserDto) {
        return this.userservice.createUser(data);
    }

    @Put(':id')
    updatewhole(@Param("id") id: string, @Body() data: UserDto) {
        try{

            const update = this.userservice.updateUser(+id,data);
            if(update){
                console.log(update)
                return update
            }
            else {
                
                throw new BadRequestException("error");}
        }catch(error){
            throw new BadRequestException(
                "error"
            );
        }
    }

    @Patch(':id')
    updateone(@Param('id') id: string, @Body() data: UserDto) {

        return this.userservice.updateone(+id, data);
    }
}