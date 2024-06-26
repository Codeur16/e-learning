/**
 * @swagger
 * tags:
 *   name: Cours
 *   description: API pour gérer les cours
 */

/**
 * @swagger
 * /api/cours/create/{idsujet}/{idformateur}:
 *   post:
 *     summary: Créer un nouveau cours
 *     tags: [Cours]
 *     parameters:
 *       - in: path
 *         name: idsujet
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du sujet associé
 *       - in: path
 *         name: idformateur
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du formateur associé
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
 *                 example: "Mathématiques de base"
 *               description:
 *                 type: string
 *                 example: "Introduction aux mathématiques de base"
 *     responses:
 *       201:
 *         description: Cours créé
 *       500:
 *         description: Erreur lors de la création du cours
 */

/**
 * @swagger
 * /api/cours/update/{id}:
 *   put:
 *     summary: Mettre à jour un cours
 *     tags: [Cours]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du cours à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titre:
 *                 type: string
 *                 example: "Mathématiques avancées"
 *               description:
 *                 type: string
 *                 example: "Introduction aux mathématiques avancées"
 *     responses:
 *       200:
 *         description: Cours mis à jour
 *       404:
 *         description: Cours non trouvé
 *       500:
 *         description: Erreur lors de la mise à jour du cours
 */

/**
 * @swagger
 * /api/cours/get:
 *   get:
 *     summary: Récupérer tous les cours
 *     tags: [Cours]
 *     responses:
 *       200:
 *         description: Liste de tous les cours
 *       500:
 *         description: Erreur lors de la récupération des cours
 */

/**
 * @swagger
 * /api/cours/get/{id}:
 *   get:
 *     summary: Récupérer un cours par ID
 *     tags: [Cours]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du cours à récupérer
 *     responses:
 *       200:
 *         description: Cours trouvé
 *       404:
 *         description: Cours non trouvé
 *       500:
 *         description: Erreur lors de la récupération du cours
 */

/**
 * @swagger
 * /api/cours/delete/{id}:
 *   delete:
 *     summary: Supprimer un cours par ID
 *     tags: [Cours]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du cours à supprimer
 *     responses:
 *       200:
 *         description: Cours supprimé
 *       404:
 *         description: Cours non trouvé
 *       500:
 *         description: Erreur lors de la suppression du cours
 */

/**
 * @swagger
 * /api/cours/getBySujet/{sujetId}:
 *   get:
 *     summary: Récupérer les cours par ID de sujet
 *     tags: [Cours]
 *     parameters:
 *       - in: path
 *         name: sujetId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du sujet
 *     responses:
 *       200:
 *         description: Cours trouvés
 *       404:
 *         description: Cours non trouvés
 *       500:
 *         description: Erreur lors de la récupération des cours
 */

/**
 * @swagger
 * /api/cours/getStudentCount/{coursId}:
 *   get:
 *     summary: Récupérer le nombre d'étudiants par ID de cours
 *     tags: [Cours]
 *     parameters:
 *       - in: path
 *         name: coursId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du cours
 *     responses:
 *       200:
 *         description: Nombre d'étudiants récupéré
 *       404:
 *         description: Cours non trouvé
 *       500:
 *         description: Erreur lors de la récupération du nombre d'étudiants
 */

/**
 * @swagger
 * /api/cours/addStudentToCours:
 *   post:
 *     summary: Ajouter un étudiant à un cours
 *     tags: [Cours]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - studentId
 *               - coursId
 *             properties:
 *               studentId:
 *                 type: integer
 *                 example: 1
 *               coursId:
 *                 type: integer
 *                 example: 101
 *     responses:
 *       200:
 *         description: Étudiant ajouté au cours
 *       404:
 *         description: Étudiant ou cours non trouvé
 *       500:
 *         description: Erreur lors de l'ajout de l'étudiant au cours
 */

/**
 * @swagger
 * /api/cours/removeStudentFromCours:
 *   post:
 *     summary: Supprimer un étudiant d'un cours
 *     tags: [Cours]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - studentId
 *               - coursId
 *             properties:
 *               studentId:
 *                 type: integer
 *                 example: 1
 *               coursId:
 *                 type: integer
 *                 example: 101
 *     responses:
 *       200:
 *         description: Étudiant supprimé du cours
 *       404:
 *         description: Étudiant ou cours non trouvé
 *       500:
 *         description: Erreur lors de la suppression de l'étudiant du cours
 */

/**
 * @swagger
 * /api/cours/cours/{coursId}/students:
 *   get:
 *     summary: Récupérer tous les étudiants inscrits à un cours
 *     tags: [Cours]
 *     parameters:
 *       - in: path
 *         name: coursId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du cours
 *     responses:
 *       200:
 *         description: Liste des étudiants inscrits au cours
 *       404:
 *         description: Cours non trouvé
 *       500:
 *         description: Erreur lors de la récupération des étudiants inscrits
 */

/**
 * @swagger
 * /api/cours/student/{studentId}/cours:
 *   get:
 *     summary: Récupérer tous les cours auxquels un étudiant est inscrit
 *     tags: [Cours]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'étudiant
 *     responses:
 *       200:
 *         description: Liste des cours auxquels l'étudiant est inscrit
 *       404:
 *         description: Étudiant non trouvé
 *       500:
 *         description: Erreur lors de la récupération des cours de l'étudiant
 */

const {
  getAllCours,
  getCoursById,
  createCours,
  updateCours,
  deleteCours,
  getCoursBySujetId,
  getStudentCountByCoursId,
  getCoursByFormateurId,
  getCoursByStudentId,
} = require("../controllers/coursControllers");
const {
  addStudentToCours,
  removeStudentFromCours,
  getStudentsInCours,
  getCoursForStudent,
} = require("../controllers/coursStudentController");
const express = require("express");
const router = express.Router();

router.post("/create/:idsujet/:idformateur", createCours);
router.put("/update/:id", updateCours);
router.get("/get", getAllCours);
router.get("/get/:id", getCoursById);
router.delete("/delete/:id", deleteCours);
router.get("/getBySujet/:sujetId", getCoursBySujetId);
router.get("/getStudentCount/:coursId", getStudentCountByCoursId);
router.get("/getByFormateur/:formateurId", getCoursByFormateurId);
router.get("/getByStudent/:studentId", getCoursByStudentId);
// Ajouter un étudiant à un cours
router.post("/addStudentToCours/:studentId/:coursId", addStudentToCours);

// Supprimer un étudiant d'un cours
router.post("/removeStudentFromCours", removeStudentFromCours);

// Récupérer tous les étudiants inscrits à un cours
router.get("/cours/:coursId/students", getStudentsInCours);

// Récupérer tous les cours auxquels un étudiant est inscrit
router.get("/student/:studentId/cours", getCoursForStudent);

module.exports = router;
