import type { Request, Response } from "express";

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("cool");
  }, 10000);
});

export const sendWelcomeMessage = async (req: Request, res: Response) => {
  await promise;

  res.status(200).json({
    status: "success",
    data: "welcome from Adapptor server",
  });
};
