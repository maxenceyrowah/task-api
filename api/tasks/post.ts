import { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Crée une nouvelle tâche
 *     description: Crée une nouvelle tâche avec les données fournies
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Titre de la tâche
 *               description:
 *                 type: string
 *                 description: Description de la tâche
 *     responses:
 *       200:
 *         description: Tâche créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello, world!
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({ message: "Hello, world!" });
}
