import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { UnicEmail } from "../validation/unicEmail.validator";

export class CreateUserDto {

    @IsNotEmpty() // For change the error message use {message: 'Custom message'} inside the decorator
    name: string;

    @IsEmail()
    @UnicEmail({ message: 'Email already exists' })
    email: string;

    @MinLength(6)
    password: string;
}