import { IsEmail, IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @IsNotEmpty({ message: "name cannot be empty" })
    name: string

    @Column()
    @IsEmail({},{ message: "email is invalid" })
    email: string

    @Column()
    address: string

    @Column()
    contact: string
}