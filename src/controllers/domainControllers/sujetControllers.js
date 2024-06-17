const { SujetTable, DomaineTable } = require("../../db/sequelize"); // Assurez-vous que le chemin est correct

const createSujet = async (req, res) => {
  const Id = req.params.id;
  DomaineTable.findByPk(Id).then((domaine) => {
    if (!domaine) {
      return res.status(404).send({ message: "domaine innexistant ! " });
    }

    const Sujet = SujetTable.create({
      ...req.body,
      domaineDomaineId: domaine.domaineId,
    });

    Sujet.then((createdSujet) => {
      const message = `Le sujet ${createdSujet.nom} a bien été créé et appartient  au domaine ${domaine.nom}`;
      return res.status(201).json({ message, data: createdSujet });
    }).catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ message: "Erreur lors de la création d'un étudiant", err });
    });
  });
};

const getAllSujets = async (req, res) => {
  try {
    const sujets = await SujetTable.findAll();
    res.status(200).json(sujets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSujetById = async (req, res) => {
  try {
    const { id } = req.params;
    const sujet = await SujetTable.findByPk(id);
    if (sujet) {
      res.status(200).json(sujet);
    } else {
      res.status(404).json({ error: "Sujet not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateSujet = async (req, res) => {
  try {
    const { id } = req.params;
    const { nom, description, domaineId } = req.body;
    const [updated] = await SujetTable.update(
      { nom, description, domaineId },
      { where: { sujetId: id } }
    );
    if (updated) {
      const updatedSujet = await SujetTable.findByPk(id);
      res.status(200).json(updatedSujet);
    } else {
      res.status(404).json({ error: "Sujet not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSujet = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await SujetTable.destroy({ where: { sujetId: id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Sujet not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSujet,
  getAllSujets,
  getSujetById,
  updateSujet,
  deleteSujet,
};
