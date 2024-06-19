const { ValidationError } = require("sequelize");
const bcrypt = require("bcrypt");
const { FormateurTable, DomaineTable } = require("../db/sequelize");
const { join } = require("path");

const sendResponse = (res, statusCode, message, data = null) => {
  res.status(statusCode).json({ message, data });
};

const FormateurRegistration = async (req, res) => {
  const idDomaine = req.params.iddomaine;
  const { nom, prenom, age, email, preference, sexe, role, password, cv } =
    req.body;
  console.log("req.body:", req.body);

  if (
    !nom ||
    !prenom ||
    !age ||
    !email ||
    !preference ||
    !sexe ||
    !role ||
    !password ||
    !cv
  ) {
    return sendResponse(res, 201, "Veuillez remplir tous les champs.");
  }

  try {
    const domaine = await DomaineTable.findByPk(idDomaine);
    if (!domaine) {
      return sendResponse(res, 201, "Domaine inexistant");
    }

    const hash = bcrypt.hashSync(password, 10);
    const newFormateur = {
      nom,
      prenom,
      age,
      email,
      preference,
      sexe,
      role,
      password: hash,
      cv,
      domaineId: domaine.domaineId,
    };

    const createdFormateur = await FormateurTable.create(newFormateur);
    const message = `Le formateur ${req.body.nom} a bien été créé`;
    sendResponse(res, 201, message, createdFormateur);
  } catch (err) {
    if (err instanceof ValidationError) {
      return sendResponse(res, 400, err.message, err);
    }
    sendResponse(
      res,
      500,
      "Erreur lors de l'ajout d'un utilisateur! Réessayez plus tard",
      err
    );
  }
};

const FormateurLogin = async (req, res) => {
  const email = req.body.email;

  try {
    const Formateur = await FormateurTable.findOne({ where: { email: email } });
    if (!Formateur) {
      return sendResponse(res, 201, "Le formateur demandé est inexistant");
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      Formateur.password
    );
    if (!isPasswordValid) {
      return sendResponse(res, 201, "Le mot de passe est incorrect!");
    }

    const message = "Le formateur a été connecté avec succès!";
    sendResponse(res, 200, message, Formateur);
  } catch (err) {
    const message = "La connexion a échoué! Réessayez dans quelques instants";
    sendResponse(res, 500, message, err);
  }
};

// Supprimer un formateur
const deleteFormateur = async (req, res) => {
  try {
    const deleted = await FormateurTable.destroy({
      where: { formateurId: req.params.id },
    });
    if (deleted) {
      const message = "Le formateur a été supprimé avec succès";
      sendResponse(res, 200, message);
    } else {
      sendResponse(res, 201, "Le formateur demandé est inexistant");
    }
  } catch (err) {
    sendResponse(res, 500, "Erreur lors de la suppression du formateur", err);
  }
};

// Mettre à jour un formateur
const updateFormateur = async (req, res) => {
  try {
    const [updated] = await FormateurTable.update(req.body, {
      where: { formateurId: req.params.id },
    });
    if (updated) {
      const updatedFormateur = await FormateurTable.findByPk(req.params.id);
      const message = "Le formateur a été mis à jour avec succès";
      sendResponse(res, 200, message, updatedFormateur);
    } else {
      sendResponse(res, 201, "Le formateur demandé est inexistant");
    }
  } catch (err) {
    if (err instanceof ValidationError) {
      return sendResponse(res, 400, err.message, err);
    }
    sendResponse(res, 500, "Erreur lors de la mise à jour du formateur", err);
  }
};

// Rechercher un formateur par ID
const getFormateurById = async (req, res) => {
  try {
    const formateur = await FormateurTable.findByPk(req.params.id);
    if (formateur) {
      sendResponse(res, 200, "Formateur récupéré avec succès", formateur);
    } else {
      sendResponse(res, 201, "Le formateur demandé est inexistant");
    }
  } catch (err) {
    sendResponse(res, 500, "Erreur lors de la récupération du formateur", err);
  }
};

// Rechercher tous les formateurs
const getAllFormateurs = async (req, res) => {
  try {
    const formateurs = await FormateurTable.findAll({
      include: [
        {
          model: DomaineTable,
          as: "domaines",
        },
      ],
    });
    sendResponse(res, 200, "Formateurs récupérés avec succès", formateurs);
  } catch (err) {
    sendResponse(
      res,
      500,
      "Erreur lors de la récupération des formateurs",
      err
    );
  }
};

module.exports = {
  FormateurRegistration,
  FormateurLogin,
  deleteFormateur,
  updateFormateur,
  getFormateurById,
  getAllFormateurs,
};
