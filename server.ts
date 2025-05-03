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
      contact: {
        name: "API Support",
        email: "support@example.com",
      },
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT",
      },
    },
    servers: [
      {
        url: process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000",
        description: "API Server",
      },
    ],
    tags: [
      {
        name: "Tasks",
        description: "Operations related to tasks",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
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

// Route pour servir le fichier swagger.json
app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerDocs);
});

// Custom CSS pour Swagger UI
const customCss = `
  .swagger-ui .topbar { display: none }
  .swagger-ui .info .title { color: #3b4151; font-size: 2em; }
  .swagger-ui .info .description { font-size: 1.2em; }
  .swagger-ui .opblock-tag { font-size: 1.2em; }
  .swagger-ui .opblock { border-radius: 5px; }
  .swagger-ui .opblock.opblock-get { background: rgba(97,175,254,.1); border-color: #61affe; }
  .swagger-ui .opblock.opblock-post { background: rgba(73,204,144,.1); border-color: #49cc90; }
  .swagger-ui .opblock.opblock-put { background: rgba(252,161,48,.1); border-color: #fca130; }
  .swagger-ui .opblock.opblock-delete { background: rgba(249,62,62,.1); border-color: #f93e3e; }
`;

// Route Swagger UI avec configuration améliorée
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, {
    customSiteTitle: "Task Manager API Documentation",
    customfavIcon: "/favicon.ico",
    customCss,
    swaggerOptions: {
      persistAuthorization: true,
      docExpansion: "list",
      defaultModelsExpandDepth: 1,
      displayRequestDuration: true,
      deepLinking: true,
      filter: true,
      showExtensions: true,
      showCommonExtensions: true,
      tryItOutEnabled: true,
    },
  })
);

const tasksHandler = require("./api/tasks").default;

app.all("/api/tasks", async (req: VercelRequest, res: VercelResponse) => {
  await tasksHandler(req, res);
});

// Export the Express API
module.exports = app;
