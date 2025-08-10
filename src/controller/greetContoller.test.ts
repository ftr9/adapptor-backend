import request from "supertest";
import app from "../app";

const greetV1Route = "/api/v1/welcome";

describe(`greetController -> ${greetV1Route}`, () => {
  test("GET - should return welcome message", async () => {
    const messageResponse = await request(app).get(greetV1Route);

    expect(messageResponse.statusCode).toBe(200);
    expect(messageResponse.body).toMatchObject({
      status: "success",
      data: "welcome from server",
    });
  });
});
