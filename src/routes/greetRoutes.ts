import express from "express";
const router = express.Router();
import { greetController } from "../controller";

/**
 * @swagger
 * tags:
 *   name: Welcome
 *   description: Endpoints related to greetings
 */

/**
 * @swagger
 * /api/v1/welcome:
 *   get:
 *     tags: [Welcome]
 *     summary: Get welcome message
 *     description: Returns a welcome message from the Adapptor server.
 *     responses:
 *       200:
 *         description: Welcome message retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: string
 *                   example: welcome from Adapptor server
 */
router.get("/", greetController.sendWelcomeMessage);

export default router;
