const { DomaineTable, SujetTable } = require("../db/sequelize"); // Assurez-vous que le chemin est correct

const sendResponse = (res, statusCode, message, data = null) => {
  res.status(statusCode).json({ message, data });
};

const createDomaine = async (req, res) => {
  try {
    const { nom, description } = req.body;
    const domaine = await DomaineTable.create({ nom, description });
    sendResponse(res, 201, "Le domaine a été créé avec succès", domaine);
  } catch (error) {
    sendResponse(
      res,
      500,
      "Erreur lors de la création du domaine",
      error.message
    );
  }
};

const getAllDomaines = async (req, res) => {
  try {
    const domaines = await DomaineTable.findAll({
      include: [
        {
          model: SujetTable,
          as: "sujets",
        },
      ],
    });
    sendResponse(res, 200, "Domaines récupérés avec succès", domaines);
    if (!domaines) {
      sendResponse(res, 200, "Aucun domaine  disponible ");
    }
  } catch (error) {
    sendResponse(
      res,
      500,
      "Erreur lors de la récupération des domaines",
      error.message
    );
  }
};

const getDomaineById = async (req, res) => {
  try {
    const { id } = req.params;
    const domaine = await DomaineTable.findByPk(id, {
      include: [
        {
          model: SujetTable,
          as: "sujets",
        },
      ],
    });
    if (domaine) {
      sendResponse(res, 200, "Domaine récupéré avec succès", domaine);
    } else {
      sendResponse(res, 404, "Domaine inexistant");
    }
  } catch (error) {
    sendResponse(
      res,
      500,
      "Erreur lors de la récupération du domaine",
      error.message
    );
  }
};

const updateDomaine = async (req, res) => {
  try {
    const { id } = req.params;
    const { nom, description } = req.body;
    const [updated] = await DomaineTable.update(
      { nom, description },
      { where: { domaineId: id } }
    );
    if (updated) {
      const updatedDomaine = await DomaineTable.findByPk(id);
      sendResponse(
        res,
        200,
        "Le domaine a été modifié avec succès",
        updatedDomaine
      );
    } else {
      sendResponse(res, 404, "Domaine inexistant");
    }
  } catch (error) {
    sendResponse(
      res,
      500,
      "Erreur lors de la modification du domaine",
      error.message
    );
  }
};

const deleteDomaine = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await DomaineTable.destroy({ where: { domaineId: id } });
    if (deleted) {
      sendResponse(res, 204, "Le domaine a été supprimé avec succès");
    } else {
      sendResponse(res, 404, "Domaine inexistant");
    }
  } catch (error) {
    sendResponse(
      res,
      500,
      "Erreur lors de la suppression du domaine",
      error.message
    );
  }
};

module.exports = {
  createDomaine,
  getAllDomaines,
  getDomaineById,
  updateDomaine,
  deleteDomaine,
};
