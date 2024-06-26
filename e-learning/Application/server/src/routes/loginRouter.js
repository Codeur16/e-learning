/**
 * @swagger
 * tags:
 *   name: Authentification
 *   description: API pour l'authentification des utilisateurs
 */

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Connexion de l'utilisateur
 *     tags: [Authentification]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Connexion réussie
 *       401:
 *         description: Identifiants invalides
 *       500:
 *         description: Erreur lors de la connexion
 */

const express = require("express");
const router = express.Router();

const { UserLogin } = require("../controllers/loginController");

router.post("/login", UserLogin);

module.exports = router;
