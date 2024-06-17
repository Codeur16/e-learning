const { DomaineTable } = require("../../db/sequelize"); // Assurez-vous que le chemin est correct

const createDomaine = async (req, res) => {
  try {
    const { nom, description } = req.body;
    const domaine = await DomaineTable.create({ nom, description });
    res.status(201).json(domaine);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllDomaines = async (req, res) => {
  try {
    const domaines = await DomaineTable.findAll();
    res.status(200).json(domaines);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDomaineById = async (req, res) => {
  try {
    const { id } = req.params;
    const domaine = await DomaineTable.findByPk(id);
    if (domaine) {
      res.status(200).json(domaine);
    } else {
      res.status(404).json({ error: "Domaine not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDomaine = async (req, res) => {
  try {
    const { id } = req.params;
    const { nom, description } = req.body;
    const [updated] = await DomaineTable.update(
      { nom, description },
      { where: { domaineId: id } }
    );
    if (updated) {
      const updatedDomaine = await DomaineTable.findByPk(id);
      res.status(200).json(updatedDomaine);
    } else {
      res.status(404).json({ error: "Domaine not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteDomaine = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await DomaineTable.destroy({ where: { domaineId: id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Domaine not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createDomaine,
  getAllDomaines,
  getDomaineById,
  updateDomaine,
  deleteDomaine,
};
