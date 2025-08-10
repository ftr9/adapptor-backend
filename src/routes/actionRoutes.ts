import express from "express";
import { actionController } from "../controller";

const router = express.Router();

router.post("/", actionController.processJsonBody);

export default router;
