import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductRepository {
    private products = [];

    async save(product) {
        // Save productData to database
        this.products.push(product);
    }

    async getUsers() {
        // Get users from database
        if (this.products == null) 
            return console.log('No Products found');
        else
            return this.products;
    }
}