const {
  getAllCours,
  getCoursById,
  createCours,
  updateCours,
  deleteCours,
} = require("../controllers/coursControllers/coursControllers");
  const express = require("express");
  const router = express.Router();

  router.post("/create", createCours);
  router.put("/update/:id", updateCours);
  router.get("/get", getAllCours);
  router.get("/get/:id", getCoursById);
  router.delete("/delete/:id", deleteCours);



  module.exports = router;
