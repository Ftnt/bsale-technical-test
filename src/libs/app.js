import express, { json } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

import routesCategory from "../routes/category.routes.js";
import routesProduct from "../routes/product.routes.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(json());

//routes
app.use("/api/category", routesCategory);
app.use("/api/product", routesProduct);

export default app;
