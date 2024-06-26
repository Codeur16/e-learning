const {
  StudentTable,
  CoursTable,
  SuivicoursTable,
  ChapitreTable,
} = require("../db/sequelize");

const sendResponse = (res, statusCode, message, data = null) => {
  res.status(statusCode).json({ message, data });
};

// const addStudentToCours = async (req, res) => {
//    const studentId = req.params.studentId;
//    const coursId = req.params.coursId;

//   try {
//     const student = await StudentTable.findByPk(studentId);
//     if (!student) {
//       return sendResponse(res, 201, "Étudiant non trouvé");
//     }

//     const cours = await CoursTable.findByPk(coursId);
//     if (!cours) {
//       return sendResponse(res, 201, "Cours non trouvé");
//     }

//     await student.addCours(cours);
//     sendResponse(res, 200, "Étudiant ajouté au cours avec succès", cours);
//   } catch (error) {
//     console.error("Erreur lors de l'ajout de l'étudiant au cours :", error);
//     sendResponse(
//       res,
//       500,
//       "Erreur lors de l'ajout de l'étudiant au cours",
//       error
//     );
//   }
// };

/*
// ajouter un student a un cours
*/

//const { StudentTable, CoursTable, SuivicoursTable, ChapitreTable } = require('../models');

const addStudentToCours = async (req, res) => {
  const studentId = req.params.studentId;
  const coursId = req.params.coursId;

  try {
    const student = await StudentTable.findByPk(studentId);
    if (!student) {
      return res.status(404).json({ message: "Étudiant non trouvé" });
    }

    const cours = await CoursTable.findByPk(coursId, {
      include: {
        model: ChapitreTable,
        as: "chapitres",
        order: [["chapitreId", "ASC"]], // Assurez-vous que les chapitres sont triés par leur ID
      },
    });

    if (!cours) {
      return res.status(404).json({ message: "Cours non trouvé" });
    }
    await student.addCours(cours);
    let msg = "l'etudiant a ete inscrit au cours , ";

    // Trouver le premier chapitre du cours ou définir sur null si le cours n'a pas de chapitre
    const firstChapitre =
      cours.chapitres.length > 0 ? cours.chapitres[0] : null;
    const firstChapitreId = firstChapitre ? firstChapitre.chapitreId : null;

    // Créer une nouvelle entrée dans SuivicoursTable
    await SuivicoursTable.create({
      studentId: studentId,
      coursId: coursId,
      currentChapitreId: firstChapitreId,
      chapitresCompletes: JSON.stringify([]), // Initialiser comme une chaîne JSON vide
    });
    msg = msg + "et Etudiant ajouté au suivi des cours avec succès";

    res.status(200).json({ message: msg });
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'étudiant au cours :", error);
    res
      .status(500)
      .json({
        message: "Erreur lors de l'ajout de l'étudiant au cours",
        error,
      });
  }
};

const removeStudentFromCours = async (req, res) => {
  const studentId = req.params.studentId;
  const coursId = req.params.coursId;

  try {
    const student = await StudentTable.findByPk(studentId);
    if (!student) {
      return sendResponse(res, 201, "Étudiant non trouvé");
    }

    const cours = await CoursTable.findByPk(coursId);
    if (!cours) {
      return sendResponse(res, 201, "Cours non trouvé");
    }

    await student.removeCours(cours);
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
  const coursId = req.params.coursId;

  try {
    const cours = await CoursTable.findByPk(coursId, {
      include: StudentTable,
    });
    if (!cours) {
      return sendResponse(res, 201, "Cours non trouvé");
    }

    sendResponse(res, 200, "Étudiants récupérés avec succès", CoursTable);
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
      include: CoursTable,
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
