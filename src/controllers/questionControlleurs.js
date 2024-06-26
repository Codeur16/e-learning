const { ValidationError } = require("sequelize");
const {
  EvaluationTable,
  QuestionTable,
  ReponseUserTable,
} = require("../db/sequelize");

// Ajouter une question à une évaluation
const addQuestionToEvaluation = async (req, res) => {
  try {
    const evaluation = await EvaluationTable.findByPk(req.params.evaluationId);

    if (!evaluation) {
      return res.status(404).json({ error: "Évaluation non trouvée" });
    }

    const questions = req.body.questions; // Supposons que le tableau de questions est dans req.body.questions

    if (!Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({ error: "Aucune question à ajouter" });
    }

    // Utilisez Promise.all pour ajouter toutes les questions
    const createdQuestions = await Promise.all(
      questions.map((question) =>
        QuestionTable.create({
          ...question,
          evaluationId: req.params.evaluationId,
        })
      )
    );

    res.status(201).json(createdQuestions);
  } catch (error) {
    console.error("Erreur lors de l'ajout des questions :", error);
    res.status(500).json({ error: "Erreur lors de l'ajout des questions" });
  }
};

// Mettre à jour une question dans une évaluation
const updateQuestionInEvaluation = async (req, res) => {
  try {
    const evaluation = await EvaluationTable.findByPk(req.params.evaluationId);
    if (evaluation) {
      const question = await QuestionTable.findByPk(req.params.questionId);
      if (question) {
        await QuestionTable.update(req.body);
        res.status(200).json(question);
      } else {
        res.status(201).json({ error: "Question not found" });
      }
    } else {
      res.status(201).json({ error: "Evaluation not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//supprimer une question dans une evaluation
const deleteQuestionInEvaluation = async (req, res) => {
  try {
    const evaluation = await EvaluationTable.findByPk(req.params.evaluationId);
    if (evaluation) {
      const question = await QuestionTable.findByPk(req.params.questionId);
      if (question) {
        await question.destroy();
        res.status(200).json({ message: "Question deleted" });
      } else {
        res.status(201).json({ error: "Question not found" });
      }
    } else {
      res.status(201).json({ error: "Evaluation not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addQuestionToEvaluation,
  updateQuestionInEvaluation,
  deleteQuestionInEvaluation,
};
