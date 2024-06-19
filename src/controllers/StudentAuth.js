const { ValidationError } = require("sequelize");
const bcrypt = require("bcrypt");
const { StudentTable } = require("../db/sequelize");

const sendResponse = (res, statusCode, message, data = null) => {
  res.status(statusCode).json({ message, data });
};

const StudentRegistration = async (req, res) => {
  const { nom, prenom, age, email, preference, sexe, role, password } =
    req.body;
  if (
    !nom ||
    !prenom ||
    !age ||
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
    const newStudent = {
      nom,
      prenom,
      age,
      email,
      preference,
      sexe,
      role,
      password: hash,
    };

    const createdStudent = await StudentTable.create(newStudent);
    const message = `L'étudiant ${req.body.nom} a bien été créé`;
    sendResponse(res, 201, message, createdStudent);
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

const StudentLogin = async (req, res) => {
  const email = req.body.email;

  try {
    const student = await StudentTable.findOne({ where: { email: email } });
    if (!student) {
      return sendResponse(res, 201, "L'utilisateur demandé est inexistant");
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      student.password
    );
    if (!isPasswordValid) {
      return sendResponse(res, 201, "Le mot de passe est incorrect!");
    }

    const message = "L'utilisateur a été connecté avec succès!";
    sendResponse(res, 200, message, student);
  } catch (err) {
    const message = "La connexion a échoué! Réessayez dans quelques instants";
    sendResponse(res, 500, message, err);
  }
};

// Supprimer un étudiant
const deleteStudent = async (req, res) => {
  try {
    const deleted = await StudentTable.destroy({
      where: { studentId: req.params.id },
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
const updateStudent = async (req, res) => {
  try {
    const [updated] = await StudentTable.update(req.body, {
      where: { studentId: req.params.id },
    });
    if (updated) {
      const updatedStudent = await StudentTable.findByPk(req.params.id);
      const message = "L'étudiant a été mis à jour avec succès";
      sendResponse(res, 200, message, updatedStudent);
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
const getStudentById = async (req, res) => {
  try {
    const student = await StudentTable.findByPk(req.params.id);
    if (student) {
      sendResponse(res, 200, "Étudiant récupéré avec succès", student);
    } else {
      sendResponse(res, 201, "L'étudiant demandé est inexistant");
    }
  } catch (err) {
    sendResponse(res, 500, "Erreur lors de la récupération de l'étudiant", err);
  }
};

// Rechercher tous les étudiants
const getAllStudents = async (req, res) => {
  try {
    const students = await StudentTable.findAll();
    sendResponse(res, 200, "Étudiants récupérés avec succès", students);
  } catch (err) {
    sendResponse(res, 500, "Erreur lors de la récupération des étudiants", err);
  }
};

module.exports = {
  StudentRegistration,
  StudentLogin,
  deleteStudent,
  updateStudent,
  getStudentById,
  getAllStudents,
};
