import { Router } from "express";
import { getProductById,getAllProduct } from "../controllers/product.controller.js";

const routes = Router();

routes.get("/", getAllProduct);
routes.get("/:id", getProductById);

export default routes;
