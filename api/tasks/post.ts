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
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tâche créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 completed:
 *                   type: boolean
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({ message: "Hello, world!" });
}
