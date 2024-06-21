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
    if (evaluation) {
      const question = await QuestionTable.create({
        ...req.body,
        evaluationId: req.params.evaluationId,
      });
      res.status(201).json(question);
    } else {
      res.status(201).json({ error: "Evaluation not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
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
