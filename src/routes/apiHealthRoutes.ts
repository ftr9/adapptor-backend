import express from "express";
import { healthController } from "../controller";

const router = express.Router();

router.get("/", healthController.returnApiHealth);

export default router;
