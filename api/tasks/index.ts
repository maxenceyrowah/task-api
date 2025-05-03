import { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Récupère toutes les tâches
 *     description: Retourne la liste de toutes les tâches
 *     responses:
 *       200:
 *         description: Liste des tâches récupérée avec succès
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
