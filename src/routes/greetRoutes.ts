import express from "express";
const router = express.Router();
import { greetController } from "../controller";

router.get("/", greetController.sendWelcomeMessage);

export default router;
