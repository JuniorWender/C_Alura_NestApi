import { IsNotEmpty, IsString, IsUrl } from "class-validator";
import { Url } from "url";

export class ProductImageDto {

    @IsUrl()
    url : Url;

    @IsNotEmpty()
    @IsString()
    description : string;
}