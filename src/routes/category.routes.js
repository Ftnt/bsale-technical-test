import { Router } from "express";
import { getAllCategory } from "../controllers/category.controller.js";

const routes = Router();

routes.get("/", getAllCategory);

export default routes;
