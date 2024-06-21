/**
 * @swagger
 * tags:
 *   name: Réponses Utilisateurs
 *   description: Endpoints pour gérer les réponses utilisateur à une question
 */

const {
  createReponseUtilisateur,
  getReponseUtilisateur,
  updateReponseUtilisateur,
} = require("../controllers/reponseUserControllers");

const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /api/reponse/question/{questionId}/create:
 *   post:
 *     summary: Créer une réponse utilisateur à une question
 *     tags: [Réponses Utilisateurs]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         description: ID de la question à laquelle répondre
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReponseUtilisateur'
 *     responses:
 *       201:
 *         description: Réponse utilisateur créée
 *       500:
 *         description: Erreur serveur
 */
router.post("/question/:questionId/create", createReponseUtilisateur)

/**
 * @swagger
 * /api/reponse/question/{questionId}/update/{reponseId}:
 *   put:
 *     summary: Mettre à jour une réponse utilisateur à une question
 *     tags: [Réponses Utilisateurs]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         description: ID de la question à laquelle répondre
 *         schema:
 *           type: integer
 *       - in: path
 *         name: reponseId
 *         required: true
 *         description: ID de la réponse utilisateur à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReponseUtilisateur'
 *     responses:
 *       200:
 *         description: Réponse utilisateur mise à jour
 *       404:
 *         description: Réponse utilisateur non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.put(
  "/question/:questionId/update/:reponseId",
  updateReponseUtilisateur
);

/**
 * @swagger
 * /api/reponse/question/{questionId}/get:
 *   get:
 *     summary: Récupérer la réponse utilisateur à une question
 *     tags: [Réponses Utilisateurs]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         description: ID de la question à laquelle répondre
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Réponse utilisateur trouvée
 *       404:
 *         description: Réponse utilisateur non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get("/question/:questionId/get", getReponseUtilisateur);

module.exports = router;
