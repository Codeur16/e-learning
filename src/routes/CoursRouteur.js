const {
  getAllCours,
  getCoursById,
  createCours,
  updateCours,
  deleteCours,
  getCoursBySujetId
} = require("../controllers/coursControllers");
const express = require("express");
const router = express.Router();

router.post("/create/:idsujet/:idformateur", createCours);
router.put("/update/:id", updateCours);
router.get("/get", getAllCours);
router.get("/get/:id", getCoursById);
router.delete("/delete/:id", deleteCours);
router.get("/getBySujet/:sujetId", getCoursBySujetId);

module.exports = router;
