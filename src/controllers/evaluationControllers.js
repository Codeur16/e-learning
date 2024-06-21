const { ValidationError } = require("sequelize");
const { EvaluationTable, QuestionTable, ReponseUserTable } = require("../db/sequelize");

const sendResponse = (res, status, message, data = null) => {
  res.status(status).json({
    message,
    data,
  });
};

// Afficher toutes les évaluations avec leurs questions associées
const getAllEvaluations = async (req, res) => {
  try {
    const evaluations = await EvaluationTable.findAll(
      {
        include: [
          {
            model: QuestionTable,
            as: "questions",
            include: [{ model: ReponseUserTable, as: "reposeUtilisateurs" }],
          },
        ],
      }
      //   {
      //   include: [
      //     {
      //       model: QuestionTable,
      //       as: "questions",
      //     },
      //     {
      //       model: ChapitreTable,
      //       as:"chapitre"
      //     }
      //   ],
      // }
    );
    sendResponse(res, 200, "Évaluations récupérées avec succès", evaluations);
  } catch (error) {
    sendResponse(
      res,
      500,
      "Erreur lors de la récupération des évaluations",
      error
    );
  }
};

// Afficher une évaluation avec ses questions associées par son ID
const getEvaluationById = async (req, res) => {
  try {
    const evaluation = await EvaluationTable.findByPk(req.params.id, 
       {
      include: [
        {
          model: QuestionTable,
          as: 'questions',
          include: [{ model:   ReponseUserTable, as: 'reposeUtilisateurs' }]
        }
      ]
    }
    //    {
    //   include: [
    //     {
    //       model: QuestionTable,
    //       as: "questions",
    //     },
    //     {
    //       model: ChapitreTable,
    //       as: "chapitre",
    //     },
    //   ],
    // }
    );
    if (evaluation) {
      sendResponse(res, 200, "Évaluation récupérée avec succès", evaluation);
    } else {
      sendResponse(res, 201, "Évaluation non trouvée");
    }
  } catch (error) {
    sendResponse(
      res,
      500,
      "Erreur lors de la récupération de l'évaluation",
      error
    );
  }
};

// Créer une évaluation avec ses questions associées
const createEvaluation = async (req, res) => {

  const chapitreId = req.params.idchapitre;



  try {
        const chapitre = await ChapitreTable.findByPk(chapitreId);
        if (!chapitre) {
          return sendResponse(res, 201, "Chapitre inexistant");
        }
        

          const { titre, description, questions } = req.body;

          // Créer une nouvelle évaluation avec ses questions
          const newEvaluation = await EvaluationTable.create(
            {
              titre,
              description,
              questions, // le tableau de questions sera automatiquement associé à l'évaluation
            },
            {
              include: [{ model: QuestionTable, as: "questions" }],
            }
          );

          sendResponse(res, 201, "Évaluation créée avec succès", newEvaluation);
    // const { questions, ...evaluationData } = req.body;
    // const evaluation = await EvaluationTable.create(evaluationData);
    // if (questions && questions.length > 0) {
    //   await Promise.all(
    //     questions.map(async (question) => {
    //       await QuestionTable.create({
    //         evaluationId: evaluation.evaluationId,
    //         ...question,
    //       });
    //     })
    //   );
    // }
    // sendResponse(res, 201, "Évaluation créée avec succès", evaluation);
  } catch (error) {
    if (error instanceof ValidationError) {
      sendResponse(res, 400, error.message, error);
    } else {
      sendResponse(
        res,
        500,
        "Erreur lors de la création de l'évaluation",
        error
      );
    }
  }
};

// Modifier une évaluation
const updateEvaluation = async (req, res) => {
  try {
    const evaluation = await EvaluationTable.findByPk(req.params.id);
    if (!evaluation) {
      sendResponse(res, 201, "Évaluation non trouvée");
      return;
    }
    const { questions, ...evaluationData } = req.body;
    await evaluation.update(evaluationData);
    if (questions && questions.length > 0) {
      await Promise.all(
        questions.map(async (question) => {
          if (question.questionId) {
            const existingQuestion = await QuestionTable.findByPk(
              question.questionId
            );
            if (existingQuestion) {
              await existingQuestion.update(question);
            }
          } else {
            await QuestionTable.create({
              evaluationId: evaluation.evaluationId,
              ...question,
            });
          }
        })
      );
    }
    sendResponse(res, 200, "Évaluation mise à jour avec succès", evaluation);
  } catch (error) {
    if (error instanceof ValidationError) {
      sendResponse(res, 400, error.message, error);
    } else {
      sendResponse(
        res,
        500,
        "Erreur lors de la mise à jour de l'évaluation",
        error
      );
    }
  }
};

// Supprimer une évaluation et ses questions associées
const deleteEvaluation = async (req, res) => {
  try {
    const evaluation = await EvaluationTable.findByPk(req.params.id);
    if (!evaluation) {
      sendResponse(res, 201, "Évaluation non trouvée");
      return;
    }
    await QuestionTable.destroy({
      where: { evaluationId: req.params.id },
    });
    await evaluation.destroy();
    sendResponse(res, 200, "Évaluation supprimée avec succès");
  } catch (error) {
    sendResponse(
      res,
      500,
      "Erreur lors de la suppression de l'évaluation",
      error
    );
  }
};

module.exports = {
  getAllEvaluations,
  getEvaluationById,
  createEvaluation,
  updateEvaluation,
  deleteEvaluation,
  
};

// const { ValidationError } = require("sequelize");
// const { EvaluationTable, ChapitreTable, QuestionTable } = require("../db/sequelize");

// const sendResponse = (res, status, message, data = null) => {
//   res.status(status).json({
//     message,
//     data,
//   });
// };

// // Afficher toutes les évaluations de la base de données avec les chapitres associés
// const getAllEvaluations = async (req, res) => {
//   try {
//     const evaluations = await EvaluationTable.findAll({
//       include: [
//         {
//           model: ChapitreTable,
//           as: "chapitres",
//         },
//         {
//           model: QuestionTable,
//           as: "question"
//         }
//       ],
//     });
//     console.log("Évaluations récupérées avec succès");
//     sendResponse(res, 200, "Évaluations récupérées avec succès", evaluations);
//   } catch (error) {
//     console.error("Erreur lors de la récupération des évaluations :", error);
//     sendResponse(
//       res,
//       500,
//       "Erreur lors de la récupération des évaluations",
//       error
//     );
//   }
// };

// // Afficher une évaluation grâce à son ID avec les chapitres associés
// const getEvaluationById = async (req, res) => {
//   try {
//     const evaluation = await EvaluationTable.findByPk(req.params.id, {
//       include: [
//         {
//           model: ChapitreTable,
//           as: "chapitres",
//         },
//         {
//           model: QuestionTable,
//           as: "question",
//         },
//       ],
//     });
//     if (evaluation) {
//       console.log("Évaluation récupérée avec succès");
//       sendResponse(res, 200, "Évaluation récupérée avec succès", evaluation);
//     } else {
//       console.log("Évaluation non trouvée");
//       sendResponse(res, 201, "Évaluation non trouvée");
//     }
//   } catch (error) {
//     console.error("Erreur lors de la récupération de l'évaluation :", error);
//     sendResponse(
//       res,
//       500,
//       "Erreur lors de la récupération de l'évaluation",
//       error
//     );
//   }
// };

// // Créer une évaluation
// const createEvaluation = async (req, res) => {
//   const chapitreId = req.params.idchapitre;

//   try {
//     const chapitre = await ChapitreTable.findByPk(chapitreId);
//     if (!chapitre) {
//       return sendResponse(res, 201, "chapitre inexistant");
//     }

//     const evaluation = await EvaluationTable.create({
//       ...req.body,
//       chapitreId: chapitreId,
//     });

//     sendResponse(
//       res,
//       201,
//       `Le chapitre ${evaluation.titre} a été créé avec succès`
//     );
//   } catch (error) {
//     console.error("Erreur lors de la création du chapitre :", error);
//     sendResponse(res, 500, "Erreur lors de la création du chapitre", error);
//   }
// };
// // Modifier une évaluation
// const updateEvaluation = async (req, res) => {
//   try {
//     const [updated] = await EvaluationTable.update(req.body, {
//       where: { evaluationId: req.params.id },
//     });
//     if (updated) {
//       const updatedEvaluation = await EvaluationTable.findByPk(req.params.id);
//       console.log("Évaluation mise à jour avec succès");
//       sendResponse(
//         res,
//         200,
//         "Évaluation mise à jour avec succès",
//         updatedEvaluation
//       );
//     } else {
//       console.log("Évaluation non trouvée");
//       sendResponse(res, 201, "Évaluation non trouvée");
//     }
//   } catch (error) {
//     if (error instanceof ValidationError) {
//       return res.status(400).json({ message: error.message, data: error });
//     }
//     console.error("Erreur lors de la mise à jour de l'évaluation :", error);
//     sendResponse(
//       res,
//       500,
//       "Erreur lors de la mise à jour de l'évaluation",
//       error
//     );
//   }
// };

// // Supprimer une évaluation
// const deleteEvaluation = async (req, res) => {
//   try {
//     const deleted = await EvaluationTable.destroy({
//       where: { evaluationId: req.params.id },
//     });
//     if (deleted) {
//       console.log("Évaluation supprimée avec succès");
//       sendResponse(res, 200, "Évaluation supprimée avec succès");
//     } else {
//       console.log("Évaluation non trouvée");
//       sendResponse(res, 201, "Évaluation non trouvée");
//     }
//   } catch (error) {
//     console.error("Erreur lors de la suppression de l'évaluation :", error);
//     sendResponse(
//       res,
//       500,
//       "Erreur lors de la suppression de l'évaluation",
//       error
//     );
//   }
// };

// module.exports = {
//   getAllEvaluations,
//   getEvaluationById,
//   createEvaluation,
//   updateEvaluation,
//   deleteEvaluation,
// };
