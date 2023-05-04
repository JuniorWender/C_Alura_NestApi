import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { UnicEmail } from "../validation/unicEmail.validator";

export class EditUserDto {

    @IsNotEmpty()
    @IsOptional()
    name: string;

    @IsEmail()
    @IsOptional()
    @UnicEmail({ message: 'Email already exists' })
    email: string;

    @MinLength(6)
    @IsOptional()
    password: string;
}