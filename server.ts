import { VercelRequest, VercelResponse } from "@vercel/node";
import cors from "cors";

const express = require("express");
const app = express();
const port = 3000;

// Configuration CORS
const corsOptions = {
  origin: process.env.FRONTEND_URL || "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// middeware
app.use(cors(corsOptions));
app.use(express.json());

const tasksHandler = require("./api/tasks").default;

app.all("/api/tasks", async (req: VercelRequest, res: VercelResponse) => {
  await tasksHandler(req, res);
});

app.listen(port, () => {
  console.log(`Serveur local démarré sur http://localhost:${port}`);
});
