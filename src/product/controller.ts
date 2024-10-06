import { Request, Response } from "express";
import { ProductService } from "./service";

export class ProductController {

    constructor(
        public productService: ProductService
    ) {}

    async getAllProducts(req: Request, res: Response) {
        const data = await this.productService.getAll();
        res.json(data);
    }

}