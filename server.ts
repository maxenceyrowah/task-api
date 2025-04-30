import { VercelRequest, VercelResponse } from "@vercel/node";

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const tasksHandler = require("./api/tasks").default;

app.all("/api/tasks", async (req: VercelRequest, res: VercelResponse) => {
  await tasksHandler(req, res);
});

app.listen(port, () => {
  console.log(`Serveur local démarré sur http://localhost:${port}`);
});
