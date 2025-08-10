import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Addaptor REST API",
      version: "1.0.0",
      description: "REST API documentation for the Addaptor frontend",
    },
    servers: [
      {
        url: process.env.BASE_URL || "http://localhost:3000",
        description:
          process.env.NODE_ENV === "production"
            ? "Production server"
            : "Local development server",
      },
    ],
  },
  apis: ["./src/routes/*.ts", "./src/controller/*.ts"],
};

export const swaggerSpecs = swaggerJsdoc(options);
