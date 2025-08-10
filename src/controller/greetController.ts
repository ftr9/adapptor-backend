import type { Request, Response } from "express";

export const sendWelcomeMessage = async (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    data: "welcome from Adapptor server",
  });
};
