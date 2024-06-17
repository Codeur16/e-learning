const {
  createSujet,
  getAllSujets,
  getSujetById,
  updateSujet,
  deleteSujet,
} = require("../controllers/domainControllers/sujetControllers");

const express = require("express");
const router = express.Router();

router.post("/create/:id", createSujet);
router.put("/update/:id", updateSujet);
router.get("/get", getAllSujets);
router.get("/get/:id", getSujetById);
router.delete("/delete/:id", deleteSujet);

module.exports = router;
