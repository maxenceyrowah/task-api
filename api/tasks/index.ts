import { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID de la tâche
 *         title:
 *           type: string
 *           description: Titre de la tâche
 *         description:
 *           type: string
 *           description: Description de la tâche
 *         completed:
 *           type: boolean
 *           description: État de la tâche
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de mise à jour
 */

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Récupère toutes les tâches
 *     description: Retourne la liste de toutes les tâches
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Liste des tâches récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({ message: "Hello, world!" });
}
