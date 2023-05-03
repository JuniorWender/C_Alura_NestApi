import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty() // For change the error message use {message: 'Custom message'} inside the decorator
    name: string;

    @IsEmail()
    email: string;

    @MinLength(6)
    password: string;
}