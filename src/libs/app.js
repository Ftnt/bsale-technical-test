import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(json());

export default app;
