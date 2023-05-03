import { Module } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { ProductController } from "./Product.controller";

@Module({
    controllers: [ProductController],
    providers: [ProductRepository],
})

export class ProductModule {}