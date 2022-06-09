import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";

import routesCategory from "../routes/category.routes.js";

const app = express();

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(json());

//routes
app.use("/api/category", routesCategory);

export default app;
