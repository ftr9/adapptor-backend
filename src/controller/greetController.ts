import type { Request, Response } from "express";

export const sendWelcomeMessage = (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    data: "welcome from server",
  });
};
