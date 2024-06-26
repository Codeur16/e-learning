/**
 * @swagger
 * tags:
 *   name: Formateurs
 *   description: Endpoints pour gérer les formateurs
 */

const {
  FormateurRegistration,
  FormateurLogin,
  deleteFormateur,
  updateFormateur,
  getFormateurById,
  getAllFormateurs,
} = require("../controllers/formateurAuth");

const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /api/formateur/get:
 *   get:
 *     summary: Récupérer la liste de tous les formateurs
 *     tags: [Formateurs]
 *     responses:
 *       200:
 *         description: Liste des formateurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Formateur'
 *       500:
 *         description: Erreur serveur
 */
router.get("/get", getAllFormateurs);

/**
 * @swagger
 * /api/formateur/get/{id}:
 *   get:
 *     summary: Récupérer un formateur par ID
 *     tags: [Formateurs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du formateur
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Formateur trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Formateur'
 *       404:
 *         description: Formateur non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get("/get/:id", getFormateurById);

/**
 * @swagger
 * tags:
 *   name: Formateurs
 *   description: API pour gérer les formateurs
 */

/**
 * @swagger
 * /api/formateur/create/{iddomaine}:
 *   post:
 *     summary: Créer un nouveau formateur
 *     tags: [Formateurs]
 *     parameters:
 *       - in: path
 *         name: iddomaine
 *         required: true
 *         description: ID du domaine
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FormateurRegistration'
 *     responses:
 *       201:
 *         description: Formateur créé
 *       500:
 *         description: Erreur serveur
 */
router.post("/create/:iddomaine", FormateurRegistration);

/**
 * @swagger
 * /api/formateur/login:
 *   post:
 *     summary: Connexion d'un formateur
 *     tags: [Formateurs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FormateurLogin'
 *     responses:
 *       200:
 *         description: Connexion réussie
 *       401:
 *         description: Identifiants invalides
 *       500:
 *         description: Erreur serveur
 */
router.post("/login", FormateurLogin);

/**
 * @swagger
 * /api/formateur/delete/{id}:
 *   delete:
 *     summary: Supprimer un formateur par ID
 *     tags: [Formateurs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du formateur à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Formateur supprimé
 *       404:
 *         description: Formateur non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.delete("/delete/:id", deleteFormateur);

/**
 * @swagger
 * /api/formateur/update/{id}:
 *   put:
 *     summary: Mettre à jour les informations d'un formateur par ID
 *     tags: [Formateurs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du formateur à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FormateurUpdate'
 *     responses:
 *       200:
 *         description: Formateur mis à jour
 *       404:
 *         description: Formateur non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.put("/update/:id", updateFormateur);

module.exports = router;
