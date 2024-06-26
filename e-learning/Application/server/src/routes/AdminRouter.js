// const {
//   adminRegistration,
//   adminLogin,
//   deleteadmin,
//   updateadmin,
//   getadminById,
//   getAlladmins,
// } = require("../controllers/adminControllers");
// const express = require("express");
// const router = express.Router();

// router.post("/create",adminRegistration);
// router.post("/login", adminLogin);
// router.delete("/:id", deleteadmin);
// router.put("/:id", updateadmin);
// router.get("/:id", getadminById);
// router.get("/", getAlladmins);
// /**
//  * @swagger
//  * tags:
//  *   name: Admin
//  *   description: Endpoints pour les opérations administratives
//  */

// /**
//  * @swagger
//  * /api/admin/create:
//  *   post:
//  *     summary: Crée un nouvel administrateur
//  *     tags: [Admin]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               nom:
//  *                 type: string
//  *               prenom:
//  *                 type: string
//  *               dateNaissance:
//  *                 type: string
//  *                 format: date
//  *               email:
//  *                 type: string
//  *               preference:
//  *                 type: string
//  *               sexe:
//  *                 type: string
//  *               role:
//  *                 type: string
//  *               password:
//  *                 type: string
//  *     responses:
//  *       201:
//  *         description: Administrateur créé avec succès
//  */

// /**
//  * @swagger
//  * /api/admin/login:
//  *   post:
//  *     summary: Connecte un administrateur
//  *     tags: [Admin]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               email:
//  *                 type: string
//  *               password:
//  *                 type: string
//  *     responses:
//  *       200:
//  *         description: Connexion réussie
//  *       401:
//  *         description: Authentification échouée
//  */

// /**
//  * @swagger
//  * /api/admin/{id}:
//  *   delete:
//  *     summary: Supprime un administrateur par ID
//  *     tags: [Admin]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID de l'administrateur à supprimer
//  *         schema:
//  *           type: integer
//  *     responses:
//  *       200:
//  *         description: Administrateur supprimé avec succès
//  *       404:
//  *         description: Administrateur non trouvé
//  */

// /**
//  * @swagger
//  * /api/admin/{id}:
//  *   put:
//  *     summary: Met à jour les informations d'un administrateur par ID
//  *     tags: [Admin]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID de l'administrateur à mettre à jour
//  *         schema:
//  *           type: integer
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               nom:
//  *                 type: string
//  *               prenom:
//  *                 type: string
//  *               dateNaissance:
//  *                 type: string
//  *                 format: date
//  *               email:
//  *                 type: string
//  *               preference:
//  *                 type: string
//  *               sexe:
//  *                 type: string
//  *               role:
//  *                 type: string
//  *               password:
//  *                 type: string
//  *     responses:
//  *       200:
//  *         description: Informations d'administrateur mises à jour avec succès
//  *       404:
//  *         description: Administrateur non trouvé
//  */

// /**
//  * @swagger
//  * /api/admin/{id}:
//  *   get:
//  *     summary: Récupère les informations d'un administrateur par ID
//  *     tags: [Admin]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID de l'administrateur à récupérer
//  *         schema:
//  *           type: integer
//  *     responses:
//  *       200:
//  *         description: Administrateur récupéré avec succès
//  *       404:
//  *         description: Administrateur non trouvé
//  */

// /**
//  * @swagger
//  * /api/admin/:
//  *   get:
//  *     summary: Récupère tous les administrateurs
//  *     tags: [Admin]
//  *     responses:
//  *       200:
//  *         description: Liste de tous les administrateurs
//  *       404:
//  *         description: Aucun administrateur trouvé
//  */

// module.exports = router;
