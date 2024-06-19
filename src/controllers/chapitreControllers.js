

const  { ChapitreTable, CoursTable, EvaluationTable }= require("../db/sequelize")

const sendResponse = (res, statusCode, message, data = null) => {
  res.status(statusCode).json({ message, data });
};

const createChapitre = async (req, res) => {
  const coursId = req.params.idcours;

  try {
    const cours = await CoursTable.findByPk(coursId);
    if (!cours) {
      return sendResponse(res, 201, "Cours inexistant");
    }

    const chapitre = await ChapitreTable.create({
      ...req.body,
      coursId: coursId,
    });

    sendResponse(
      res,
      201,
      `Le chapitre ${chapitre.titre} a été créé avec succès`
    );
  } catch (error) {
    console.error("Erreur lors de la création du chapitre :", error);
    sendResponse(res, 500, "Erreur lors de la création du chapitre", error);
  }
};
const getAllchapitres = async (req, res) => {
  try {
    const chapitres = await ChapitreTable.findAll({
      include: [
        {
          model: CoursTable,
          as: "cours",
        },
        {
          model: EvaluationTable,
          as:"evaluations"
        }
      ],
    });
    sendResponse(res, 200, "chapitres récupérés avec succès", chapitres);
  } catch (error) {
    sendResponse(
      res,
      500,
      "Erreur lors de la récupération des chapitres",
      error.message
    );
  }
};

const getchapitreById = async (req, res) => {
  try {
    const { id } = req.params;
    const chapitre = await ChapitreTable.findByPk(id, {
      include: [
        {
          model: CoursTable,
          as: "cours",
        },
        {
          model: EvaluationTable,
          as: "evaluations",
        },
      ],
    });

    if (chapitre) {
      sendResponse(res, 200, "chapitre récupéré avec succès", chapitre);
    } else {
      sendResponse(res, 201, "chapitre inexistant");
    }
  } catch (error) {
    sendResponse(
      res,
      500,
      "Erreur lors de la récupération du chapitre",
      error.message
    );
  }
};

const updatechapitre = async (req, res) => {
  try {
    const { id } = req.params;
    const { nom, description, domaineId } = req.body;

    const [updated] = await ChapitreTable.update(
      { nom, description, domaineId },
      { where: { chapitreId: id } }
    );

    if (updated) {
      const updatedchapitre = await ChapitreTable.findByPk(id);
      sendResponse(
        res,
        200,
        "Le chapitre a été modifié avec succès",
        updatedchapitre
      );
    } else {
      sendResponse(res, 201, "chapitre inexistant");
    }
  } catch (error) {
    sendResponse(
      res,
      500,
      "Erreur lors de la modification du chapitre",
      error.message
    );
  }
};

const deletechapitre = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await ChapitreTable.destroy({ where: { chapitreId: id } });

    if (deleted) {
      sendResponse(res, 204, "Le chapitre a été supprimé avec succès");
    } else {
      sendResponse(res, 201, "chapitre inexistant");
    }
  } catch (error) {
    sendResponse(
      res,
      500,
      "Erreur lors de la suppression du chapitre",
      error.message
    );
  }
};

module.exports = {
  createChapitre,
  getAllchapitres,
  getchapitreById,
  updatechapitre,
  deletechapitre,
};
