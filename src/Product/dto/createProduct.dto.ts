import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, IsPositive, IsString, Max, MaxLength, ValidateNested } from "class-validator";
import { ProductCharacteristicsDto } from "./productCharacteristics.dto";
import { ProductImageDto } from "./productImage.dto";
import { Type } from "class-transformer";

export class CreateProductDto {

    @IsNotEmpty()
    @IsString()
    name : string;

    @IsNumber()
    @IsPositive()
    price : number;

    @IsNumber()
    @Max(0)
    amount : number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(1000)
    description : string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3)
    @Type(() => ProductCharacteristicsDto)
    characteristics : ProductCharacteristicsDto[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ProductImageDto)
    image : ProductImageDto[];

    @IsString()
    @IsNotEmpty()
    category : string;
}