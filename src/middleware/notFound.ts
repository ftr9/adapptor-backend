import type { Request, Response, NextFunction } from "express";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    status: "fail",
    message: `The requested resource ${req.originalUrl} was not found.`,
  });
};
