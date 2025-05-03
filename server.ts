import { VercelRequest, VercelResponse } from "@vercel/node";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import path from "path";

const express = require("express");
const app = express();

// Configuration Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task Manager API",
      version: "1.0.0",
      description: "API documentation for Task Manager application",
    },
    servers: [
      {
        url: process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000",
        description: "API Server",
      },
    ],
  },
  apis: [path.join(__dirname, "./api/**/*.ts")],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Configuration CORS
const corsOptions = {
  origin: process.env.FRONTEND_URL || "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Route Swagger avec configuration personnalisée
const swaggerUiOptions = {
  explorer: true,
  swaggerOptions: {
    urls: [
      {
        url: "/swagger.json",
        name: "Task Manager API",
      },
    ],
  },
};

// Route pour servir le fichier swagger.json
app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerDocs);
});

// Route Swagger UI
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, swaggerUiOptions)
);

const tasksHandler = require("./api/tasks").default;

app.all("/api/tasks", async (req: VercelRequest, res: VercelResponse) => {
  await tasksHandler(req, res);
});

// Export the Express API
module.exports = app;
