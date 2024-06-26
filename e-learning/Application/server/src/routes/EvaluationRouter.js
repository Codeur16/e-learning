/**
 * @swagger
 * tags:
 *   name: Évaluations
 *   description: API pour gérer les évaluations
 */

/**
 * @swagger
 * /api/evaluation/create/{chapitreId}:
 *   post:
 *     summary: Créer une nouvelle évaluation
 *     tags: [Évaluations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Évaluation 1"
 *               description:
 *                 type: string
 *                 example: "Description de l'évaluation 1"
 *     responses:
 *       201:
 *         description: Évaluation créée
 *       500:
 *         description: Erreur lors de la création de l'évaluation
 */

/**
 * @swagger
 * /api/evaluation/update/{id}:
 *   put:
 *     summary: Mettre à jour une évaluation
 *     tags: [Évaluations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'évaluation à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Évaluation 1 mise à jour"
 *               description:
 *                 type: string
 *                 example: "Description mise à jour de l'évaluation 1"
 *     responses:
 *       200:
 *         description: Évaluation mise à jour
 *       404:
 *         description: Évaluation non trouvée
 *       500:
 *         description: Erreur lors de la mise à jour de l'évaluation
 */

/**
 * @swagger
 * /api/evaluation/get:
 *   get:
 *     summary: Récupérer toutes les évaluations
 *     tags: [Évaluations]
 *     responses:
 *       200:
 *         description: Liste de toutes les évaluations
 *       500:
 *         description: Erreur lors de la récupération des évaluations
 */

/**
 * @swagger
 * /api/evaluation/get/{id}:
 *   get:
 *     summary: Récupérer une évaluation par ID
 *     tags: [Évaluations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'évaluation à récupérer
 *     responses:
 *       200:
 *         description: Évaluation trouvée
 *       404:
 *         description: Évaluation non trouvée
 *       500:
 *         description: Erreur lors de la récupération de l'évaluation
 */

/**
 * @swagger
 * /api/evaluation/delete/{id}:
 *   delete:
 *     summary: Supprimer une évaluation par ID
 *     tags: [Évaluations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'évaluation à supprimer
 *     responses:
 *       200:
 *         description: Évaluation supprimée
 *       404:
 *         description: Évaluation non trouvée
 *       500:
 *         description: Erreur lors de la suppression de l'évaluation
 */

const {
  getAllEvaluations,
  getEvaluationById,
  createEvaluation,
  updateEvaluation,
  deleteEvaluation,
} = require("../controllers/evaluationControllers");

const express = require("express");
const router = express.Router();

router.post("/create/:chapitreId", createEvaluation);  
router.put("/update/:id", updateEvaluation);
router.get("/get", getAllEvaluations);
router.get("/get/:id", getEvaluationById);
router.delete("/delete/:id", deleteEvaluation);

module.exports = router;
