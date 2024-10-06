import { Router } from "express";
import { ProductEntity } from "./entity"
import { ProductService } from "./service"
import { ProductController } from "./controller";

export const productRoutes = () => {
    const productEntity = new ProductEntity();
    const productService = new ProductService(productEntity);
    const productController = new ProductController(productService);

    const routes = Router();

    routes.get('/', productController.getAllProducts.bind(productController));

    return {
        routes,
        service: productService
    }
}