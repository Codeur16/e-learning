const { SujetTable, DomaineTable } = require("../db/sequelize"); // Assurez-vous que le chemin est correct

const sendResponse = (res, statusCode, message, data = null) => {
  res.status(statusCode).json({ message, data });
};

const createSujet = async (req, res) => {
  try {
    const id = req.params.id;
    const domaine = await DomaineTable.findByPk(id);

    if (!domaine) {
      return sendResponse(res, 404, "Domaine inexistant !");
    }

    const sujet = await SujetTable.create({
      ...req.body,
      domaineId: domaine.domaineId,
    });

    const message = `Le sujet ${sujet.nom} a bien été créé et appartient au domaine ${domaine.nom}`;
    sendResponse(res, 201, message, sujet);
  } catch (error) {
    sendResponse(
      res,
      500,
      "Erreur lors de la création du sujet",
      error.message
    );
  }
};

const getAllSujets = async (req, res) => {
  try {
    const sujets = await SujetTable.findAll({
      include: [
        {
          model: DomaineTable,
          as: "domaines",
        },
      ],
    });
    sendResponse(res, 200, "Sujets récupérés avec succès", sujets);
  } catch (error) {
    sendResponse(
      res,
      500,
      "Erreur lors de la récupération des sujets",
      error.message
    );
  }
};

const getSujetById = async (req, res) => {
  try {
    const { id } = req.params;
    const sujet = await SujetTable.findByPk(id, {
      include: [
        {
          model: DomaineTable,
          as: "domaines",
        },
      ],
    });

    if (sujet) {
      sendResponse(res, 200, "Sujet récupéré avec succès", sujet);
    } else {
      sendResponse(res, 404, "Sujet inexistant");
    }
  } catch (error) {
    sendResponse(
      res,
      500,
      "Erreur lors de la récupération du sujet",
      error.message
    );
  }
};

const updateSujet = async (req, res) => {
  try {
    const { id } = req.params;
    const { nom, description, domaineId } = req.body;

    const [updated] = await SujetTable.update(
      { nom, description, domaineId },
      { where: { sujetId: id } }
    );

    if (updated) {
      const updatedSujet = await SujetTable.findByPk(id);
      sendResponse(
        res,
        200,
        "Le sujet a été modifié avec succès",
        updatedSujet
      );
    } else {
      sendResponse(res, 404, "Sujet inexistant");
    }
  } catch (error) {
    sendResponse(
      res,
      500,
      "Erreur lors de la modification du sujet",
      error.message
    );
  }
};

const deleteSujet = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await SujetTable.destroy({ where: { sujetId: id } });

    if (deleted) {
      sendResponse(res, 204, "Le sujet a été supprimé avec succès");
    } else {
      sendResponse(res, 404, "Sujet inexistant");
    }
  } catch (error) {
    sendResponse(
      res,
      500,
      "Erreur lors de la suppression du sujet",
      error.message
    );
  }
};

module.exports = {
  createSujet,
  getAllSujets,
  getSujetById,
  updateSujet,
  deleteSujet,
};
