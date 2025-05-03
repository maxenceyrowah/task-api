import { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * @swagger
 * /api/tasks/{id}:
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: ID de la tâche
 *   get:
 *     summary: Récupère une tâche spécifique
 *     description: Retourne les détails d'une tâche en fonction de son ID
 *     responses:
 *       200:
 *         description: Tâche récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello, world!
 *   put:
 *     summary: Met à jour une tâche
 *     description: Met à jour les informations d'une tâche existante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Nouveau titre de la tâche
 *               description:
 *                 type: string
 *                 description: Nouvelle description de la tâche
 *     responses:
 *       200:
 *         description: Tâche mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello, world!
 *   delete:
 *     summary: Supprime une tâche
 *     description: Supprime une tâche en fonction de son ID
 *     responses:
 *       200:
 *         description: Tâche supprimée avec succès
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
