const {
  CoursTable,
  FormateurTable,
  SujetTable,
} = require("../db/sequelize");

const sendResponse = (res, statusCode, message, data = null) => {
  res.status(statusCode).json({ message, data });
};

const getAllCours = async (req, res) => {
  try {
    const cours = await CoursTable.findAll({ include: [
        {
          model: SujetTable,
          as: "sujets",
        },
        {
          model:FormateurTable,
          as:"formateurs"
        }
      ],
    });
    console.log("Tous les cours ont été récupérés avec succès");
    sendResponse(
      res,
      200,
      "Tous les cours ont été récupérés avec succès",
      cours
    );
  } catch (error) {
    console.error("Erreur lors de la récupération des cours :", error);
    sendResponse(res, 500, "Erreur lors de la récupération des cours", error);
  }
};

const getCoursById = async (req, res) => {
  try {
    const cours = await CoursTable.findByPk(req.params.id,{ include: [
        {
          model: SujetTable,
          as: "sujets",
        },
        {
          model:FormateurTable,
          as:"formateurs"
        }
      ],
    });
    if (cours) {
      console.log("Cours récupéré avec succès");
      sendResponse(res, 200, "Cours récupéré avec succès", cours);
    } else {
      console.log("Cours introuvable");
      sendResponse(res, 404, "Cours introuvable");
    }
  } catch (error) {
    console.error("Erreur lors de la récupération du cours :", error);
    sendResponse(res, 500, "Erreur lors de la récupération du cours", error);
  }
};

const createCours = async (req, res) => {
  const sujetId = req.params.idsujet;
  const formateurId = req.params.idformateur;

  try {
    const formateur = await FormateurTable.findByPk(formateurId);
    if (!formateur) {
      return sendResponse(res, 404, "Formateur inexistant");
    }

    const sujet = await SujetTable.findByPk(sujetId);
    if (!sujet) {
      return sendResponse(res, 404, "Sujet inexistant");
    }
        
    const cours = await CoursTable.create({
      ...req.body,
      sujetId: sujetId,
      formateurId: formateurId,
    });

    sendResponse(res, 201, `Le cours ${cours.nom} a été créé avec succès`);
  } catch (error) {
    console.error("Erreur lors de la création du cours :", error);
    sendResponse(res, 500, "Erreur lors de la création du cours", error);
  }
};

const updateCours = async (req, res) => {
  try {
    const [updated] = await CoursTable.update(req.body, {
      where: { coursId: req.params.id },
    });
    if (updated) {
      const updatedCours = await CoursTable.findByPk(req.params.id);
      console.log("Cours modifié avec succès");
      sendResponse(res, 200, "Cours modifié avec succès", updatedCours);
    } else {
      console.log("Cours introuvable");
      sendResponse(res, 404, "Cours introuvable");
    }
  } catch (error) {
    console.error("Erreur lors de la modification du cours :", error);
    sendResponse(res, 500, "Erreur lors de la modification du cours", error);
  }
};

const deleteCours = async (req, res) => {
  try {
    const deleted = await CoursTable.destroy({
      where: { coursId: req.params.id },
    });
    if (deleted) {
      console.log("Cours supprimé avec succès");
      sendResponse(res, 200, "Cours supprimé avec succès");
    } else {
      console.log("Cours introuvable");
      sendResponse(res, 404, "Cours introuvable");
    }
  } catch (error) {
    console.error("Erreur lors de la suppression du cours :", error);
    sendResponse(res, 500, "Erreur lors de la suppression du cours", error);
  }
};

module.exports = {
  getAllCours,
  getCoursById,
  createCours,
  updateCours,
  deleteCours,
};
