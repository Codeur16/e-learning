/**
 * @swagger
 * tags:
 *   name: Chapitres
 *   description: API pour gérer les chapitres
 */

/**
 * @swagger
 * /api/chapitre/create/{idcours}:
 *   post:
 *     summary: Créer un nouveau chapitre
 *     tags: [Chapitres]
 *     parameters:
 *       - in: path
 *         name: idcours
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du cours associé
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - titre
 *               - description
 *             properties:
 *               titre:
 *                 type: string
 *                 example: "Introduction"
 *               description:
 *                 type: string
 *                 example: "Introduction au cours"
 *     responses:
 *       201:
 *         description: Chapitre créé
 *       500:
 *         description: Erreur lors de la création du chapitre
 */

/**
 * @swagger
 * /api/chapitre/update/{id}:
 *   put:
 *     summary: Mettre à jour un chapitre
 *     tags: [Chapitres]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du chapitre à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titre:
 *                 type: string
 *                 example: "Introduction"
 *               description:
 *                 type: string
 *                 example: "Introduction au cours"
 *     responses:
 *       200:
 *         description: Chapitre mis à jour
 *       404:
 *         description: Chapitre non trouvé
 *       500:
 *         description: Erreur lors de la mise à jour du chapitre
 */

/**
 * @swagger
 * /api/chapitre/get:
 *   get:
 *     summary: Récupérer tous les chapitres
 *     tags: [Chapitres]
 *     responses:
 *       200:
 *         description: Liste de tous les chapitres
 *       500:
 *         description: Erreur lors de la récupération des chapitres
 */

/**
 * @swagger
 * /api/chapitre/get/{id}:
 *   get:
 *     summary: Récupérer un chapitre par ID
 *     tags: [Chapitres]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du chapitre à récupérer
 *     responses:
 *       200:
 *         description: Chapitre trouvé
 *       404:
 *         description: Chapitre non trouvé
 *       500:
 *         description: Erreur lors de la récupération du chapitre
 */

/**
 * @swagger
 * /api/chapitre/delete/{id}:
 *   delete:
 *     summary: Supprimer un chapitre par ID
 *     tags: [Chapitres]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du chapitre à supprimer
 *     responses:
 *       200:
 *         description: Chapitre supprimé
 *       404:
 *         description: Chapitre non trouvé
 *       500:
 *         description: Erreur lors de la suppression du chapitre
 */

/**
 * @swagger
 * /api/chapitre/delete/{id}:
 *   delete:
 *     summary: Supprimer un chapitre par ID
 *     tags: [Chapitres]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du chapitre à supprimer
 *     responses:
 *       200:
 *         description: Chapitre supprimé
 *       404:
 *         description: Chapitre non trouvé
 *       500:
 *         description: Erreur lors de la suppression du chapitre
 */
/**
 * @swagger
 * /api/chapitres/cours/{coursId}:
 *   get:
 *     summary: Récupérer tous les chapitres par ID de cours
 *     tags: [Chapitres]
 *     parameters:
 *       - in: path
 *         name: coursId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du cours pour lequel récupérer les chapitres
 *     responses:
 *       200:
 *         description: Chapitres récupérés avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID du chapitre
 *                   titre:
 *                     type: string
 *                     description: Titre du chapitre
 *                   contenu:
 *                     type: string
 *                     description: Contenu du chapitre
 *                   coursId:
 *                     type: integer
 *                     description: ID du cours
 *                   cours:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID du cours
 *                       nom:
 *                         type: string
 *                         description: Nom du cours
 *                   evaluations:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                           description: ID de l'évaluation
 *                         nom:
 *                           type: string
 *                           description: Nom de l'évaluation
 *                         score:
 *                           type: integer
 *                           description: Score de l'évaluation
 *       201:
 *         description: Aucun chapitre trouvé pour ce cours
 *       500:
 *         description: Erreur lors de la récupération des chapitres
 */

const {
  createChapitre,
  getAllchapitres,
  getchapitreById,
  updatechapitre,
  deletechapitre,
  getChapitresByIdCours,
} = require("../controllers/chapitreControllers");

const express = require("express");
const router = express.Router();

router.post("/create/:idcours", createChapitre);
router.put("/update/:id", updatechapitre);
router.get("/get", getAllchapitres);
router.get("/get/:id", getchapitreById);
router.delete("/delete/:id", deletechapitre);
router.get("/getbyidcours/:coursId", getChapitresByIdCours);

module.exports = router;
