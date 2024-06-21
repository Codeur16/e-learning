const { QuestionTable, ReponseUserTable } = require("../db/sequelize");


// Créer une nouvelle réponse utilisateur à une question
const createReponseUtilisateur = async (req, res) => {
  try {
    const { reponseUtilisateur, reponseCorrect, scoreObtenu } =
      req.body;
const questionId= req.params.questionId;
    // Vérifiez si la question existe
    const question = await QuestionTable.findByPk(questionId);
    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    const newReponse = await ReponseUserTable.create({
      reponseUtilisateur,
      reponseCorrect,
      scoreObtenu,
      questionId:questionId
    });

    res.status(201).json(newReponse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir une réponse utilisateur à une question
const getReponseUtilisateur = async (req, res) => {
  try {
    const reponse = await ReponseUserTable.findByPk(req.params.id, {
      include: [{ model: QuestionTable, as: "questions" }],
    });
    if (reponse) {
      res.status(200).json(reponse);
    } else {
      res.status(404).json({ error: "ReponseUtilisateur not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Modifier une réponse utilisateur à une question
const updateReponseUtilisateur = async (req, res) => {
  try {
    const { reponseUtilisateur, reponseCorrect, scoreObtenu } = req.body;

    const reponse = await ReponseUserTable.findByPk(req.params.id);
    if (!reponse) {
      return res.status(404).json({ error: "ReponseUtilisateur not found" });
    }

    await reponse.update({
      reponseUtilisateur,
      reponseCorrect,
      scoreObtenu,
    });

    res.status(200).json(reponse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createReponseUtilisateur,
  getReponseUtilisateur,
  updateReponseUtilisateur,
};
