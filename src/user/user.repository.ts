import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";

@EntityRepository(User)
export class userRepository extends Repository<User>{
    this: Repository<User>;
    async getuserbyid(id: number): Promise<User> {
        return this.findOne({ where: { id: id } })
    }
}