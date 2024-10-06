import { BaseReaderDriver } from "../db/base.reader.driver";

export class ProductEntity extends BaseReaderDriver {

    constructor() {
        super('product')
    }

    async getProductByName(name: string) {
        const products = await this.get();

        return products?.find((product: Product) => product.name == name)
    }

    async addProduct(product: Product) {
        this.save(product)
    }

}

export class Product {
    constructor(
        public id: string,
        public name: string,
        public path: string[],
    ) {}
}