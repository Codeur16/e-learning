
const { ValidationError } = require("sequelize");
const { EvaluationTable } = require("../../db/sequelize");

const sendResponse = (res, status, message, data = null) => {
  res.status(status).json({
    message,
    data,
  });
};

// Afficher toutes les évaluations de la base de données
const getAllEvaluations = async (req, res) => {
  try {
    const evaluations = await EvaluationTable.findAll();
    console.log("Évaluations récupérées avec succès");
    sendResponse(res, 200, "Évaluations récupérées avec succès", evaluations);
  } catch (error) {
    console.error("Erreur lors de la récupération des évaluations :", error);
    sendResponse(res, 500, "Erreur lors de la récupération des évaluations", error);
  }
};

// Afficher une évaluation grâce à son ID
const getEvaluationById = async (req, res) => {
  try {
    const evaluation = await EvaluationTable.findByPk(req.params.id);
    if (evaluation) {
      console.log("Évaluation récupérée avec succès");
      sendResponse(res, 200, "Évaluation récupérée avec succès", evaluation);
    } else {
      console.log("Évaluation non trouvée");
      sendResponse(res, 404, "Évaluation non trouvée");
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de l'évaluation :", error);
    sendResponse(res, 500, "Erreur lors de la récupération de l'évaluation", error);
  }
};

// Créer une évaluation
const createEvaluation = async (req, res) => {
  try {
    const evaluation = await EvaluationTable.create(req.body);
    console.log("Évaluation créée avec succès");
    sendResponse(res, 201, "Évaluation créée avec succès", evaluation);
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ message: error.message, data: error });
    }
    console.error("Erreur lors de la création de l'évaluation :", error);
    sendResponse(res, 500, "Erreur lors de la création de l'évaluation", error);
  }
};

// Modifier une évaluation
const updateEvaluation = async (req, res) => {
  try {
    const [updated] = await EvaluationTable.update(req.body, {
      where: { evaluationId: req.params.id },
    });
    if (updated) {
      const updatedEvaluation = await EvaluationTable.findByPk(req.params.id);
      console.log("Évaluation mise à jour avec succès");
      sendResponse(res, 200, "Évaluation mise à jour avec succès", updatedEvaluation);
    } else {
      console.log("Évaluation non trouvée");
      sendResponse(res, 404, "Évaluation non trouvée");
    }
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ message: error.message, data: error });
    }
    console.error("Erreur lors de la mise à jour de l'évaluation :", error);
    sendResponse(res, 500, "Erreur lors de la mise à jour de l'évaluation", error);
  }
};

// Supprimer une évaluation
const deleteEvaluation = async (req, res) => {
  try {
    const deleted = await EvaluationTable.destroy({
      where: { evaluationId: req.params.id },
    });
    if (deleted) {
      console.log("Évaluation supprimée avec succès");
      sendResponse(res, 200, "Évaluation supprimée avec succès");
    } else {
      console.log("Évaluation non trouvée");
      sendResponse(res, 404, "Évaluation non trouvée");
    }
  } catch (error) {
    console.error("Erreur lors de la suppression de l'évaluation :", error);
    sendResponse(res, 500, "Erreur lors de la suppression de l'évaluation", error);
  }
};

module.exports = {
  getAllEvaluations,
  getEvaluationById,
  createEvaluation,
  updateEvaluation,
  deleteEvaluation,
};