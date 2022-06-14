import { Router } from "express";
import { getProductById,getSearchProduct } from "../controllers/product.controller.js";

const routes = Router();

routes.get("/", getSearchProduct);
routes.get("/:id", getProductById);

export default routes;
