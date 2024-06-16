const { CoursTable } = require("../../db/sequelize");
// afficher tous les CoursTable
// Afficher tous les CoursTable
const sendResponse = (res, statusCode, message, data) => {
  res.status(statusCode).json({ message, data });
};

const getAllCours = async (req, res) => {
  try {
    const Cours = await CoursTable.findAll();
    console.log("Le cours a bien ete cree");
    sendResponse(
      res,
      200,
      "Le cours a bien ete cree",
      Cours
    );
  } catch (error) {
    console.error("Erreur lors de la creation du cours:", error);
    sendResponse(res, 500, "Erreur lors de la creation du cours", error);
  }
};

// afficher un CoursTable par son id
const getCoursById = async (req, res) => {
  try {
    const Cours = await CoursTable.findByPk(req.params.id);
    if (CoursTable) {
      console.log("Cours fetched successfully");
      sendResponse(res, 200, "Cours fetched successfully", Cours);
    } else {
      console.log("Cours not found");
      sendResponse(res, 404, "Cours not found");
    }
  } catch (error) {
    console.error("Error fetching Cours:", error);
    sendResponse(res, 500, "Error fetching Cours", error);
  }
};

// creer un CoursTable
const createCours = async (req, res) => {
  try {
    const Cours = await CoursTable.create(req.body);
    console.log("CoursTable created successfully");
    sendResponse(res, 201, "CoursTable created successfully", Cours);
  } catch (error) {
    console.error("Error creating Cours:", error);
    sendResponse(res, 500, "Error creating Cours", error);
  }
};

// modifier un CoursTable
const updateCours = async (req, res) => {
  try {
    const [updated] = await CoursTable.update(req.body, {
      where: { coursId: req.params.id },
    });
    if (updated) {
      const updated = await CoursTable.findByPk(req.params.id);
      console.log("Le cours a bien ete modifie");
      sendResponse(res, 200, "Le cours a bien ete modifie", updated);
    } else {
      console.log("Cours introuvable");
      sendResponse(res, 404, "Cours introuvable");
    }
  } catch (error) {
    console.error("Erreur lors de la modification du cours:", error);
    sendResponse(res, 500, "Erreur lors de la modification du cours", error);
  }
};

// supprimer un CoursTable
const deleteCours = async (req, res) => {
  try {
    const deleted = await CoursTable.destroy({
      where: { coursId: req.params.id },
    });
    if (deleted) {
      console.log("Le cours a bien ete supprimer");
      sendResponse(res, 200, "Le cours a bien ete supprimer");
    } else {
      console.log("Cours introuvable");
      sendResponse(res, 404, "Cours introuvable");
    }
  } catch (error) {
    console.error("Erreur lors de la suppression du cours", error);
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
