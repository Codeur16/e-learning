const {
  ChapitreTable,
  CoursTable,
  StudentTable,
  SuivicoursTable,
} = require("../db/sequelize");
const sendResponse = (res, statusCode, message, data = null) => {
  res.status(statusCode).json({ message, data });
};
const getCurrentChapitre = async (req, res) => {
  const { studentId, coursId } = req.params;

  try {
    const progress = await SuivicoursTable.findOne({
      where: { studentId, coursId },
      include: [{ model: ChapitreTable, as: "currentChapitre" }],
    });

    if (!progress) {
      return sendResponse(res, 201, "Progression de cours non trouvée");
    }

    const currentChapitre = progress.currentChapitre;
    sendResponse(
      res,
      200,
      "Chapitre actuel récupéré avec succès",
      currentChapitre
    );
  } catch (error) {
    console.error("Erreur lors de la récupération du chapitre actuel :", error);
    sendResponse(
      res,
      500,
      "Erreur lors de la récupération du chapitre actuel",
      error
    );
  }
};

module.exports = { getCurrentChapitre };
