const { getAllEvaluations,
  getEvaluationById,
  createEvaluation,
  updateEvaluation,
  deleteEvaluation,} =require("../controllers/evaluationControllers/evaluationControllers")

    const express = require("express");
  const router = express.Router();

  router.post("/create", createEvaluation);
  router.put("/update/:id", updateEvaluation);
  router.get("/get", getAllEvaluations);
  router.get("/get/:id", getEvaluationById);
  router.delete("/delete/:id", deleteEvaluation);


  module.exports = router;