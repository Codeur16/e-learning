const {  StudentTable, CoursTable  } = require("../db/sequelize");



const addStudentToCours = async (req, res) => {
  const { studentId, coursId } = req.body;

  try {
    const student = await StudentTable.findByPk(studentId);
    if (!student) {
      return sendResponse(res, 201, "Étudiant non trouvé");
    }

    const cours = await CoursTable.findByPk(coursId);
    if (!cours) {
      return sendResponse(res, 201, "Cours non trouvé");
    }

    await StudentTable.addCours(cours);
    sendResponse(res, 200, "Étudiant ajouté au cours avec succès");
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'étudiant au cours :", error);
    sendResponse(
      res,
      500,
      "Erreur lors de l'ajout de l'étudiant au cours",
      error
    );
  }
};


const removeStudentFromCours = async (req, res) => {
  const { studentId, coursId } = req.body;

  try {
    const student = await StudentTable.findByPk(studentId);
    if (!student) {
      return sendResponse(res, 201, "Étudiant non trouvé");
    }

    const cours = await CoursTable.findByPk(coursId);
    if (!cours) {
      return sendResponse(res, 201, "Cours non trouvé");
    }

    await StudentTable.removeCours(cours);
    sendResponse(res, 200, "Étudiant retiré du cours avec succès");
  } catch (error) {
    console.error(
      "Erreur lors de la suppression de l'étudiant du cours :",
      error
    );
    sendResponse(
      res,
      500,
      "Erreur lors de la suppression de l'étudiant du cours",
      error
    );
  }
};


const getStudentsInCours = async (req, res) => {
  const { coursId } = req.params;

  try {
    const cours = await CoursTable.findByPk(coursId, {
      include: Student,
    });
    if (!cours) {
      return sendResponse(res, 201, "Cours non trouvé");
    }

    sendResponse(res, 200, "Étudiants récupérés avec succès", CoursTable.students);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des étudiants du cours :",
      error
    );
    sendResponse(
      res,
      500,
      "Erreur lors de la récupération des étudiants du cours",
      error
    );
  }
};


const getCoursForStudent = async (req, res) => {
  const { studentId } = req.params;

  try {
    const student = await StudentTable.findByPk(studentId, {
      include: Cours,
    });
    if (!student) {
      return sendResponse(res, 201, "Étudiant non trouvé");
    }

    sendResponse(res, 200, "Cours récupérés avec succès", StudentTable.cours);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des cours de l'étudiant :",
      error
    );
    sendResponse(
      res,
      500,
      "Erreur lors de la récupération des cours de l'étudiant",
      error
    );
  }
};

module.exports = {
  addStudentToCours,
  removeStudentFromCours,
  getStudentsInCours,
  getCoursForStudent,
};
