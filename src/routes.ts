import { Router } from "express";
import healthRoutes from "./health/routes";
import { productRoutes } from "./product/routes";

const routes = Router();
const product = productRoutes();

routes.use('/health', healthRoutes);
routes.use('/products', product.routes)

export default routes;