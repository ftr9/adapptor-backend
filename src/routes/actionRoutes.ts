import express from "express";
import { actionController } from "../controller";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Actions
 *   description: Endpoints related to processing actions
 */

/**
 * @swagger
 * /api/v1/action:
 *   post:
 *     tags: [Actions]
 *     summary: Process JSON body
 *     description: Accepts a JSON payload, processes it, and returns a success response.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               foo: bar
 *     responses:
 *       201:
 *         description: JSON body processed successfully
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
 *                   example: accepted JSON successfully.
 *       400:
 *         description: Bad Request (missing fields)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: fail
 *                 message:
 *                   type: string
 *                   example: a body must have atleast one property.
 */
router.post("/", actionController.processJsonBody);

export default router;
