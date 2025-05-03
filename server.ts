import { VercelRequest, VercelResponse } from "@vercel/node";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import path from "path";

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
  apis: [path.join(__dirname, "./api/**/*.ts")], // Chemin absolu vers les fichiers contenant les routes
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
app.use("/api-docs", swaggerUi.serve);
app.get(
  "/api-docs",
  swaggerUi.setup(swaggerDocs, {
    explorer: true,
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "Task Manager API Documentation",
  })
);

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
