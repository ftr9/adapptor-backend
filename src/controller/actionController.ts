import type { Request, Response } from "express";

export const processJsonBody = (req: Request, res: Response) => {
  // body should not be empty
  if (Object.values(req.body || {}).length === 0) {
    return res.status(400).json({
      status: "fail",
      message: "a body must have atleast one property.",
    });
  }

  res.status(201).json({
    status: "success",
    data: "accepted JSON successfully.",
  });
};
