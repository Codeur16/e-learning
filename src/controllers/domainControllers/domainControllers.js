const { ValidationError } = require("sequelize");
const { DomainTable, CoursTable } = require("../../db/sequelize");

const sendResponse = (res, status, message, data = null) => {
  res.status(status).json({
    message,
    data,
  });
};

// Afficher tous les domaines
const getAllDomaines = async (req, res) => {
  try {
    const domaines = await DomainTable.findAll({ include: CoursTable });
    console.log("Domaines récupérés avec succès");
    sendResponse(res, 200, "Domaines récupérés avec succès", domaines);
  } catch (error) {
    console.error("Erreur lors de la récupération des domaines :", error);
    sendResponse(
      res,
      500,
      "Erreur lors de la récupération des domaines",
      error
    );
  }
};

// Afficher un domaine par son ID
const getDomaineById = async (req, res) => {
  try {
    const domaine = await DomainTable.findByPk(req.params.id, {
      include: CoursTable,
    });
    if (domaine) {
      console.log("Domaine récupéré avec succès");
      sendResponse(res, 200, "Domaine récupéré avec succès", domaine);
    } else {
      console.log("Domaine non trouvé");
      sendResponse(res, 404, "Domaine non trouvé");
    }
  } catch (error) {
    console.error("Erreur lors de la récupération du domaine :", error);
    sendResponse(res, 500, "Erreur lors de la récupération du domaine", error);
  }
};

// Créer un domaine
const createDomaine = async (req, res) => {
  try {
    const domaine = await DomainTable.create(req.body);
    console.log("Domaine créé avec succès");
    sendResponse(res, 201, "Domaine créé avec succès", domaine);
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ message: error.message, data: error });
    }
    console.error("Erreur lors de la création du domaine :", error);
    sendResponse(res, 500, "Erreur lors de la création du domaine", error);
  }
};

// Mettre à jour un domaine
const updateDomaine = async (req, res) => {
  try {
    const [updated] = await DomainTable.update(req.body, {
      where: { domaineId: req.params.id },
    });
    if (updated) {
      const updatedDomaine = await DomainTable.findByPk(req.params.id, {
        include: CoursTable,
      });
      console.log("Domaine mis à jour avec succès");
      sendResponse(res, 200, "Domaine mis à jour avec succès", updatedDomaine);
    } else {
      console.log("Domaine non trouvé");
      sendResponse(res, 404, "Domaine non trouvé");
    }
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ message: error.message, data: error });
    }
    console.error("Erreur lors de la mise à jour du domaine :", error);
    sendResponse(res, 500, "Erreur lors de la mise à jour du domaine", error);
  }
};

// Supprimer un domaine
const deleteDomaine = async (req, res) => {
  try {
    const deleted = await DomainTable.destroy({
      where: { domaineId: req.params.id },
    });
    if (deleted) {
      console.log("Domaine supprimé avec succès");
      sendResponse(res, 200, "Domaine supprimé avec succès");
    } else {
      console.log("Domaine non trouvé");
      sendResponse(res, 404, "Domaine non trouvé");
    }
  } catch (error) {
    console.error("Erreur lors de la suppression du domaine :", error);
    sendResponse(res, 500, "Erreur lors de la suppression du domaine", error);
  }
};

module.exports = {
  getAllDomaines,
  getDomaineById,
  createDomaine,
  updateDomaine,
  deleteDomaine,
};
