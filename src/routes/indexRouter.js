/**
 * @swagger
 * tags:
 *   name: Student
 *   description: Endpoints pour les opérations liées aux étudiants
 */

/**
 * @swagger
 * tags:
 *   name: Formateur
 *   description: Endpoints pour les opérations liées aux formateurs
 */

/**
 * @swagger
 * tags:
 *   name: Cours
 *   description: Endpoints pour les opérations liées aux cours
 */

/**
 * @swagger
 * tags:
 *   name: Domaine
 *   description: Endpoints pour les opérations liées aux domaines
 */

/**
 * @swagger
 * /api/student:
 *   post:
 *     summary: Créer un nouvel étudiant
 *     tags: [Student]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       '201':
 *         description: Étudiant créé avec succès
 *       '400':
 *         description: Requête invalide
 *       '500':
 *         description: Erreur serveur
 *   get:
 *     summary: Récupérer tous les étudiants
 *     tags: [Student]
 *     responses:
 *       '200':
 *         description: Succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 *       '500':
 *         description: Erreur serveur
 * /api/formateur:
 *   post:
 *     summary: Créer un nouveau formateur
 *     tags: [Formateur]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Formateur'
 *     responses:
 *       '201':
 *         description: Formateur créé avec succès
 *       '400':
 *         description: Requête invalide
 *       '500':
 *         description: Erreur serveur
 *   get:
 *     summary: Récupérer tous les formateurs
 *     tags: [Formateur]
 *     responses:
 *       '200':
 *         description: Succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Formateur'
 *       '500':
 *         description: Erreur serveur
 * /api/cours:
 *   post:
 *     summary: Créer un nouveau cours
 *     tags: [Cours]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cours'
 *     responses:
 *       '201':
 *         description: Cours créé avec succès
 *       '400':
 *         description: Requête invalide
 *       '500':
 *         description: Erreur serveur
 *   get:
 *     summary: Récupérer tous les cours
 *     tags: [Cours]
 *     responses:
 *       '200':
 *         description: Succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cours'
 *       '500':
 *         description: Erreur serveur
 * /api/domain:
 *   post:
 *     summary: Créer un nouveau domaine
 *     tags: [Domaine]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Domaine'
 *     responses:
 *       '201':
 *         description: Domaine créé avec succès
 *       '400':
 *         description: Requête invalide
 *       '500':
 *         description: Erreur serveur
 *   get:
 *     summary: Récupérer tous les domaines
 *     tags: [Domaine]
 *     responses:
 *       '200':
 *         description: Succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Domaine'
 *       '500':
 *         description: Erreur serveur
 */

const express = require("express");
const router = express.Router();

const StudentRouter = require("./StudentRouter");
const FormateurRouter = require("./FormateurRouter");
const CoursRouteur = require("./CoursRouteur");
const EvaluationRouter = require("./EvaluationRouter");
const DomainRouteur = require("./DomainRouteur");
const SujetRouteur = require("./SujetRouter");
const ChapitreRouteur = require("./ChapitreRouter");
const LoginRouteur = require("./loginRouter");

router.use("/api/student", StudentRouter);
router.use("/api/formateur", FormateurRouter);
router.use("/api/cours", CoursRouteur);
router.use("/api/evaluation", EvaluationRouter);
router.use("/api/domain", DomainRouteur);
router.use("/api/sujet", SujetRouteur);
router.use("/api/chapitre", ChapitreRouteur);
router.use("/api/user", LoginRouteur);

module.exports = router;
