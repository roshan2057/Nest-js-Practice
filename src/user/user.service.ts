import { BadRequestException, Injectable } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { userRepository } from "./user.repository";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: userRepository) { }
    // private readonly userRepository: userRepository) { }

    async getalluser(): Promise<User[]> {

        return this.userRepository.find();
    }
    async createUser(userdata: UserDto): Promise<User> {
        const newUser = this.userRepository.create(userdata);
        return await this.userRepository.save(newUser);
    }

    async updateUser(id: number, data: UserDto): Promise<User | { message: string }> {
        try {

            const user = await this.userRepository.findOne({ where: { id: id } });
            // const user = await this.userRepository.findOne(id);
            if (user) {
                try {

                    const update = await this.userRepository.update(id, data);
                    if (update.affected > 0) {
                        return { message: "updated" }
                    }
                    return { message: "not updated" }
                } catch (error) {
                    throw new BadRequestException("message");
                }
            }
            return { message: "noUser" }
        } catch (error) {
            throw new BadRequestException("User Not Found");
        }
    }

    async updateone(id: number, data: UserDto): Promise<any> {
        const update = await this.userRepository.update(id, data)
        if (update.affected > 0) {
            return { message: "updated" }
        }
        return { message: "not updated" }
    }

}