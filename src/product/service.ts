import { randomUUID } from "crypto";
import { Product, ProductEntity } from "./entity";

export class ProductService {
    constructor(
        private productEntity: ProductEntity
    ) {}

    createProduct(name: string, path: string[]) {
        const product = new Product(
            randomUUID(),
            name, 
            path
        )

        const queryProduct = this.productEntity.getProductByName(name);

        if(!queryProduct) {
            this.productEntity.addProduct(product)
        }
    }

    getAll() {
        return this.productEntity.get() as unknown as Product[];
    }
}