const { ValidationError } = require("sequelize");
const bcrypt = require("bcrypt");
const { AdminTable } = require("../db/sequelize");

const sendResponse = (res, statusCode, message, data = null) => {
  res.status(statusCode).json({ message, data });
};

const adminRegistration = async (req, res) => {
  const {
    nom,
    prenom,
    dateNaissance,
    email,
    preference,
    sexe,
    role,
    password,
  } = req.body;
  if (
    !nom ||
    !prenom ||
    !dateNaissance ||
    !email ||
    !preference ||
    !sexe ||
    !role ||
    !password
  ) {
    return sendResponse(res, 201, "Veuillez remplir tous les champs.");
  }

  try {
    const hash = bcrypt.hashSync(password, 10);
    const newadmin = {
      nom,
      prenom,
      dateNaissance,
      email,
      preference,
      sexe,
      role,
      password: hash,
    };

    const createdadmin = await AdminTable.create(newadmin);
    const message = `L'étudiant ${req.body.nom} a bien été créé`;
    sendResponse(res, 201, message, createdadmin);
  } catch (err) {
    if (err instanceof ValidationError) {
      return sendResponse(res, 201, err.message, err);
    }
    sendResponse(
      res,
      500,
      "Erreur lors de l'ajout d'un utilisateur! Réessayez plus tard",
      err
    );
  }
};

const adminLogin = async (req, res) => {
  const email = req.body.email;

  try {
    const admin = await AdminTable.findOne({ where: { email: email } });
    if (!admin) {
      return sendResponse(res, 201, "L'utilisateur demandé est inexistant");
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      admin.password
    );
    if (!isPasswordValid) {
      return sendResponse(res, 201, "Le mot de passe est incorrect!");
    }

    const message = "L'utilisateur a été connecté avec succès!";
    sendResponse(res, 200, message, admin);
  } catch (err) {
    const message = "La connexion a échoué! Réessayez dans quelques instants";
    sendResponse(res, 500, message, err);
  }
};

// Supprimer un étudiant
const deleteadmin = async (req, res) => {
  try {
    const deleted = await AdminTable.destroy({
      where: { adminId: req.params.id },
    });
    if (deleted) {
      const message = "L'étudiant a été supprimé avec succès";
      sendResponse(res, 200, message);
    } else {
      sendResponse(res, 201, "L'étudiant demandé est inexistant");
    }
  } catch (err) {
    sendResponse(res, 500, "Erreur lors de la suppression de l'étudiant", err);
  }
};

// Mettre à jour un étudiant
const updateadmin = async (req, res) => {
  try {
    const [updated] = await AdminTable.update(req.body, {
      where: { adminId: req.params.id },
    });
    if (updated) {
      const updatedadmin = await AdminTable.findByPk(req.params.id);
      const message = "L'étudiant a été mis à jour avec succès";
      sendResponse(res, 200, message, updatedadmin);
    } else {
      sendResponse(res, 201, "L'étudiant demandé est inexistant");
    }
  } catch (err) {
    if (err instanceof ValidationError) {
      return sendResponse(res, 400, err.message, err);
    }
    sendResponse(res, 500, "Erreur lors de la mise à jour de l'étudiant", err);
  }
};

// Rechercher un étudiant
const getadminById = async (req, res) => {
  try {
    const admin = await AdminTable.findByPk(req.params.id);
    if (admin) {
      sendResponse(res, 200, "Étudiant récupéré avec succès", admin);
    } else {
      sendResponse(res, 201, "L'étudiant demandé est inexistant");
    }
  } catch (err) {
    sendResponse(res, 500, "Erreur lors de la récupération de l'étudiant", err);
  }
};

// Rechercher tous les étudiants
const getAlladmins = async (req, res) => {
  try {
    const admins = await AdminTable.findAll();
    sendResponse(res, 200, "Étudiants récupérés avec succès", admins);
  } catch (err) {
    sendResponse(res, 500, "Erreur lors de la récupération des étudiants", err);
  }
};

module.exports = {
  adminRegistration,
  adminLogin,
  deleteadmin,
  updateadmin,
  getadminById,
  getAlladmins,
};
