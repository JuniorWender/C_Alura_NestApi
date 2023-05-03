import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductRepository } from "./product.repository";

@Controller('/products')
export class ProductController {

    constructor(private _productRepository: ProductRepository) { }

    @Post()
    async CreateUser(@Body() productData) {
        this._productRepository.save(productData)
        return productData;
    }

    @Get()
    async getUsers() {
        return this._productRepository.getUsers();
    }
}