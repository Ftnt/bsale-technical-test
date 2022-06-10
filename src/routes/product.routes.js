import { Router } from "express";
import { getProductById } from "../controllers/product.controller.js";

const routes = Router();

routes.get("/:id", getProductById);

export default routes;
