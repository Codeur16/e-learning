/**
 * @swagger
 * tags:
 *   nom: Domaines
 *   description: API pour gérer les domaines
 */

/**
 * @swagger
 * /api/domain/create:
 *   post:
 *     summary: Créer un nouveau domaine
 *     tags: [Domaines]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nom
 *               - description
 *             properties:
 *               nom:
 *                 type: string
 *                 example: "Informatique"
 *               description:
 *                 type: string
 *                 example: "Domaines liés à l'informatique"
 *     responses:
 *       201:
 *         description: Domaine créé
 *       500:
 *         description: Erreur lors de la création du domaine
 */

/**
 * @swagger
 * /api/domain/update/{id}:
 *   put:
 *     summary: Mettre à jour un domaine
 *     tags: [Domaines]
 *     parameters:
 *       - in: path
 *         nom: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du domaine à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *                 example: "Informatique avancée"
 *               description:
 *                 type: string
 *                 example: "Domaines liés à l'informatique avancée"
 *     responses:
 *       200:
 *         description: Domaine mis à jour
 *       404:
 *         description: Domaine non trouvé
 *       500:
 *         description: Erreur lors de la mise à jour du domaine
 */

/**
 * @swagger
 * /api/domain/get:
 *   get:
 *     summary: Récupérer tous les domaines
 *     tags: [Domaines]
 *     responses:
 *       200:
 *         description: Liste de tous les domaines
 *       500:
 *         description: Erreur lors de la récupération des domaines
 */

/**
 * @swagger
 * /api/domain/get/{id}:
 *   get:
 *     summary: Récupérer un domaine par ID
 *     tags: [Domaines]
 *     parameters:
 *       - in: path
 *         nom: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du domaine à récupérer
 *     responses:
 *       200:
 *         description: Domaine trouvé
 *       404:
 *         description: Domaine non trouvé
 *       500:
 *         description: Erreur lors de la récupération du domaine
 */

/**
 * @swagger
 * /api/domain/delete/{id}:
 *   delete:
 *     summary: Supprimer un domaine par ID
 *     tags: [Domaines]
 *     parameters:
 *       - in: path
 *         nom: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du domaine à supprimer
 *     responses:
 *       200:
 *         description: Domaine supprimé
 *       404:
 *         description: Domaine non trouvé
 *       500:
 *         description: Erreur lors de la suppression du domaine
 */

const {
  createDomaine,
  getAllDomaines,
  getDomaineById,
  updateDomaine,
  deleteDomaine,
} = require("../controllers/domainControllers");

const express = require("express");
const router = express.Router();

router.post("/create", createDomaine);
router.put("/update/:id", updateDomaine);
router.get("/get", getAllDomaines);
router.get("/get/:id", getDomaineById);
router.delete("/delete/:id", deleteDomaine);

module.exports = router;
