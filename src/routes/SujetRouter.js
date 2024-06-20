/**
 * @swagger
 * tags:
 *   name: Sujets
 *   description: API pour la gestion des sujets
 */

/**
 * @swagger
 * /api/sujet/create/{id}:
 *   post:
 *     summary: Créer un sujet
 *     tags: [Sujets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du cours auquel le sujet est associé
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
 *         description: Sujet créé avec succès
 *       400:
 *         description: Requête invalide
 *       500:
 *         description: Erreur lors de la création du sujet
 *
 * /api/sujet/update/{id}:
 *   put:
 *     summary: Mettre à jour un sujet
 *     tags: [Sujets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du sujet à mettre à jour
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
 *       200:
 *         description: Sujet mis à jour avec succès
 *       404:
 *         description: Sujet non trouvé
 *       500:
 *         description: Erreur lors de la mise à jour du sujet
 *
 * /api/sujet/get:
 *   get:
 *     summary: Obtenir tous les sujets
 *     tags: [Sujets]
 *     responses:
 *       200:
 *         description: Liste des sujets récupérée avec succès
 *       500:
 *         description: Erreur lors de la récupération des sujets
 *
 * /api/sujet/get/{id}:
 *   get:
 *     summary: Obtenir un sujet par son ID
 *     tags: [Sujets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du sujet à récupérer
 *     responses:
 *       200:
 *         description: Sujet récupéré avec succès
 *       404:
 *         description: Sujet non trouvé
 *       500:
 *         description: Erreur lors de la récupération du sujet
 *
 * /api/sujet/delete/{id}:
 *   delete:
 *     summary: Supprimer un sujet
 *     tags: [Sujets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du sujet à supprimer
 *     responses:
 *       200:
 *         description: Sujet supprimé avec succès
 *       404:
 *         description: Sujet non trouvé
 *       500:
 *         description: Erreur lors de la suppression du sujet
 */

const express = require("express");
const router = express.Router();

const {
  createSujet,
  getAllSujets,
  getSujetById,
  updateSujet,
  deleteSujet,
} = require("../controllers/sujetControllers");

router.post("/create/:id", createSujet);
router.put("/update/:id", updateSujet);
router.get("/get", getAllSujets);
router.get("/get/:id", getSujetById);
router.delete("/delete/:id", deleteSujet);

module.exports = router;
