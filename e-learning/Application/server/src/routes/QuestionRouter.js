/**
 * @swagger
 * tags:
 *   name: Questions
 *   description: Endpoints pour gérer les questions dans une évaluation
 */

const {
  updateQuestionInEvaluation,
  deleteQuestionInEvaluation,
  addQuestionToEvaluation,
} = require("../controllers/questionControlleurs");

const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /api/question/evaluation/{evaluationId}/create:
 *   post:
 *     summary: Ajouter une question à une évaluation
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: evaluationId
 *         required: true
 *         description: ID de l'évaluation à laquelle ajouter la question
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Question'
 *     responses:
 *       201:
 *         description: Création réussie de la question
 *       500:
 *         description: Erreur serveur
 */
router.post("/evaluation/:evaluationId/create", addQuestionToEvaluation);

/**
 * @swagger
 * /api/question/evaluation/{evaluationId}/update/{questionId}:
 *   put:
 *     summary: Mettre à jour une question dans une évaluation
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: evaluationId
 *         required: true
 *         description: ID de l'évaluation contenant la question à mettre à jour
 *         schema:
 *           type: integer
 *       - in: path
 *         name: questionId
 *         required: true
 *         description: ID de la question à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Question'
 *     responses:
 *       200:
 *         description: Question mise à jour avec succès
 *       404:
 *         description: Question non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.put(
  "/evaluation/:evaluationId/update/:questionId",
  updateQuestionInEvaluation
);

/**
 * @swagger
 * /api/question/evaluation/{evaluationId}/delete/{questionId}:
 *   delete:
 *     summary: Supprimer une question dans une évaluation
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: evaluationId
 *         required: true
 *         description: ID de l'évaluation contenant la question à supprimer
 *         schema:
 *           type: integer
 *       - in: path
 *         name: questionId
 *         required: true
 *         description: ID de la question à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Question supprimée avec succès
 *       404:
 *         description: Question non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.delete(
  "/evaluation/:evaluationId/delete/:questionId",
  deleteQuestionInEvaluation
);

module.exports = router;
