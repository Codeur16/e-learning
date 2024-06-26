const {
  ChapitreTable,
  CoursTable,
  StudentTable,
  SuivicoursTable,
} = require("../db/sequelize");
const sendResponse = (res, statusCode, message, data = null) => {
  res.status(statusCode).json({ message, data });
};
const getCurrentChapitre = async (req, res) => {
  const { studentId, coursId } = req.params;

  try {
    const progress = await SuivicoursTable.findOne({
      where: { studentId, coursId },
      include: [{ model: ChapitreTable, as: "currentChapitre" }],
    });

    if (!progress) {
      return sendResponse(res, 201, "Progression de cours non trouvée");
    }

    const currentChapitre = progress.currentChapitre;
    sendResponse(
      res,
      200,
      "Chapitre actuel récupéré avec succès",
      currentChapitre
    );
  } catch (error) {
    console.error("Erreur lors de la récupération du chapitre actuel :", error);
    sendResponse(
      res,
      500,
      "Erreur lors de la récupération du chapitre actuel",
      error
    );
  }
};

// const getCompletedCoursesCount = async (req, res) => {
//   try {
//     const studentId = req.params.studentId;

//     // Trouver les cours complétés par l'étudiant
//     const completedCourses = await SuivicoursTable.findAll({
//       where: {
//         studentId: studentId,
//       },
//       include: [
//         {
//           model: CoursTable,
//           as: "cours",
//           include: [
//             {
//               model: ChapitreTable,
//               as: "chapitres",
//             },
//           ],
//         },
//       ],
//     });

//     let completedCoursesCount = 0;

//     completedCourses.forEach((courseProgress) => {
//       const chapitresIds = courseProgress.cours.chapitres.map(
//         (chapitre) => chapitre.chapitreId
//       );
//       const chapitresCompletes = courseProgress.chapitresCompletes;

//       // Vérifie si tous les chapitres du cours sont dans chapitresCompletes
//       if (chapitresIds.every((id) => chapitresCompletes.includes(id))) {
//         completedCoursesCount++;
//       }
//     });

//     res.status(200).json({ completedCoursesCount });
//   } catch (error) {
//     console.error(
//       "Erreur lors de la récupération du nombre de cours complétés :",
//       error
//     );
//     res
//       .status(500)
//       .json({
//         error:
//           "Une erreur est survenue lors de la récupération du nombre de cours complétés.",
//       });
//   }
// };

// const getCompletedChaptersCount = async (req, res) => {
//   try {
//     const  studentId = req.params.studentId;
//     const  coursId  = req.params.coursId;

//     // Trouver le suivi de cours pour l'étudiant et le cours spécifique
//     const courseProgress = await SuivicoursTable.findOne({
//       where: {
//         studentId: studentId,
//         coursId: coursId,
//       },
//       include: [
//         {
//           model: CoursTable,
//           as: "cours",
//           include: [
//             {
//               model: ChapitreTable,
//               as: "chapitres",
//             },
//           ],
//         },
//       ],
//     });

//     if (!courseProgress) {
//       return res
//         .status(404)
//         .json({
//           error: "Course progress not found for this student and course",
//         });
//     }

//     const chapitresIds = courseProgress.cours.chapitres.map(
//       (chapitre) => chapitre.chapitreId
//     );
//     const chapitresCompletes = courseProgress.chapitresCompletes;

//     // Calculer le nombre de chapitres complétés
//     const completedChaptersCount = chapitresIds.filter((id) =>
//       chapitresCompletes.includes(id)
//     ).length;

//     res.status(200).json({ completedChaptersCount });
//   } catch (error) {
//     console.error(
//       "Erreur lors de la récupération du nombre de chapitres complétés :",
//       error
//     );
//     res
//       .status(500)
//       .json({
//         error:
//           "Une erreur est survenue lors de la récupération du nombre de chapitres complétés.",
//       });
//   }
// };

const getCompletedChaptersCount = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const coursId = req.params.studentId;

    // Trouver le suivi de cours pour l'étudiant et le cours spécifique
    const courseProgress = await SuivicoursTable.findOne({
      where: {
        studentId: studentId,
        coursId: coursId,
      },
    });

    if (!courseProgress) {
      return res.status(404).json({
        error: "Course progress not found for this student and course",
      });
    }

    // Récupérer la chaîne de caractères de chapitres complets
    const chapitresCompletesString = courseProgress.chapitresCompletes;

    // Convertir la chaîne en tableau
    let chapitresCompletes = [];
    if (chapitresCompletesString) {
      chapitresCompletes = JSON.parse(chapitresCompletesString);
    }

    // Compter le nombre d'éléments dans le tableau
    const completedChaptersCount = chapitresCompletes.length;

    res.status(200).json({ completedChaptersCount });
  } catch (error) {
    console.error(
      "Erreur lors de la récupération du nombre de chapitres complétés :",
      error
    );
    res.status(500).json({
      error:
        "Une erreur est survenue lors de la récupération du nombre de chapitres complétés.",
    });
  }
};

module.exports = { getCurrentChapitre, getCompletedChaptersCount };
