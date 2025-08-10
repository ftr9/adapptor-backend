import express from "express";
import { greetRoutes, apiHealthRoutes } from "./routes";
import { notFound } from "./middleware";

const app = express();

app.use(express.json());

app.use("/api/health", apiHealthRoutes);
app.use("/api/v1/welcome", greetRoutes);

//handle 404 routes
app.use(notFound);

export default app;
