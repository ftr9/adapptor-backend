import request from "supertest";
import app from "../app";

const actionV1Route = "/api/v1/action";

describe(`actionController -> ${actionV1Route}`, () => {
  test("POST - should not process empty request body", async () => {
    const actionMessage = await request(app).post(actionV1Route).send({});

    expect(actionMessage.statusCode).toBe(400);
    expect(actionMessage.body).toMatchObject({
      status: "fail",
      message: "a body must have atleast one property.",
    });
  });

  test("POST - should process request body having some properties", async () => {
    const actionMessage = await request(app).post(actionV1Route).send({
      foo: "bar",
    });

    expect(actionMessage.statusCode).toBe(201);
    expect(actionMessage.body).toMatchObject({
      status: "success",
      data: "accepted JSON successfully.",
    });
  });
});
