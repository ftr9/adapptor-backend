import type { Request, Response } from "express";

export const returnApiHealth = (_: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    data: "Api is running healthy",
  });
};
