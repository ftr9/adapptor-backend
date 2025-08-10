import request from "supertest";
import app from "../app";

const healthRoute = "/api/health";

describe(`apiHealthController -> ${healthRoute}`, () => {
  test("GET - should return api health message", async () => {
    const messageResponse = await request(app).get(healthRoute);

    expect(messageResponse.statusCode).toBe(200);
    expect(messageResponse.body).toMatchObject({
      status: "success",
      data: "Api is running healthy",
    });
  });
});
