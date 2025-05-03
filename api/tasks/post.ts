import { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Crée une nouvelle tâche
 *     description: Crée une nouvelle tâche avec les données fournies
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *                 description: Titre de la tâche
 *                 example: "Faire les courses"
 *               description:
 *                 type: string
 *                 description: Description détaillée de la tâche
 *                 example: "Acheter du pain, du lait et des œufs"
 *     responses:
 *       201:
 *         description: Tâche créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         description: Données invalides
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
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
