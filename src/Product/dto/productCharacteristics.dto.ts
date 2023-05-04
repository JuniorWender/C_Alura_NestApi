import { IsNotEmpty, IsString } from "class-validator";

export class ProductCharacteristicsDto {

    @IsNotEmpty()
    @IsString()
    name : string;

    @IsNotEmpty()
    @IsString()
    description : string;
}