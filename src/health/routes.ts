import Router from "express"
import HealthController from "./controller";

const healthRoutes = Router();

const healthController = new HealthController();

healthRoutes.get('/', healthController.getHealth)

export default healthRoutes;