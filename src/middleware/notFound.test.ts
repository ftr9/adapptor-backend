import { notFound } from ".";
import type { Request, Response } from "express";

describe("notFound Middleware", () => {
  test("should call res object with 404 status and not found message", () => {
    //mocked Req object
    const req = {
      originalUrl: "/not-found-route",
    } as Request;

    //mocked Res object
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    //mocked NextFunction
    const nextFunction = () => {};

    notFound(req, res, nextFunction);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      status: "fail",
      message: `The requested resource ${req.originalUrl} was not found.`,
    });
  });
});
