import { VercelRequest, VercelResponse } from "@vercel/node";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const express = require("express");
const app = express();
const port = 3000;

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
        url: `http://localhost:${port}`,
        description: "Local development server",
      },
    ],
  },
  apis: ["./api/**/*.ts"], // Chemin vers les fichiers contenant les routes
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

// Route Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const tasksHandler = require("./api/tasks").default;

app.all("/api/tasks", async (req: VercelRequest, res: VercelResponse) => {
  await tasksHandler(req, res);
});

app.listen(port, () => {
  console.log(`Serveur local démarré sur http://localhost:${port}`);
  console.log(
    `Documentation Swagger disponible sur http://localhost:${port}/api-docs`
  );
});
