import express from "express";
import { greetRoutes, apiHealthRoutes, actionRoutes } from "./routes";
import { notFound } from "./middleware";
import swaggerUI from "swagger-ui-express";
import { swaggerSpecs } from "./configs";

const app = express();

app.use(express.json());

app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

app.use("/api/health", apiHealthRoutes);
app.use("/api/v1/welcome", greetRoutes);
app.use("/api/v1/action", actionRoutes);

//handle 404 routes
app.use(notFound);

export default app;
