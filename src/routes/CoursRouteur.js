const {
  getAllCours,
  getCoursById,
  createCours,
  updateCours,
  deleteCours,
  getCoursBySujetId,
  getStudentCountByCoursId,
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
// Ajouter un étudiant à un cours
router.post('/addStudentToCours', addStudentToCours);

// Supprimer un étudiant d'un cours
router.post('/removeStudentFromCours', removeStudentFromCours);

// Récupérer tous les étudiants inscrits à un cours
router.get('/cours/:coursId/students', getStudentsInCours);

// Récupérer tous les cours auxquels un étudiant est inscrit
router.get('/student/:studentId/cours', getCoursForStudent);

module.exports = router;
