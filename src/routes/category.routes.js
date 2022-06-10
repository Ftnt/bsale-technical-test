import { Router } from "express";
import {
  getAllCategory,
  getProductbyCategory,
} from "../controllers/category.controller.js";

const routes = Router();

routes.get("/", getAllCategory);
routes.get("/:id", getProductbyCategory);

export default routes;
