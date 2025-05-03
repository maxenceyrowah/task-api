import { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           description: ID unique de la tâche
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         title:
 *           type: string
 *           description: Titre de la tâche
 *           example: "Faire les courses"
 *         description:
 *           type: string
 *           description: Description détaillée de la tâche
 *           example: "Acheter du pain, du lait et des œufs"
 *         completed:
 *           type: boolean
 *           description: État de la tâche
 *           example: false
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création
 *           example: "2024-01-01T12:00:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de mise à jour
 *           example: "2024-01-01T12:00:00Z"
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Message d'erreur
 *           example: "Une erreur est survenue"
 */

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Récupère toutes les tâches
 *     description: Retourne la liste de toutes les tâches existantes
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
 *       500:
 *         description: Erreur serveur
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({ message: "Hello, world!" });
}
