const domaine = (sequelize, DataTypes) => {
  const Domaine = sequelize.define(
    "domaine",
    {
      domaineId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: true,
      updateAt: "updateTimestamp",
    }
  );

  return Domaine;
};
const sujet = (sequelize, DataTypes) => {
  const sujet = sequelize.define(
    "sujet",
    {
      sujetId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // domaineId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false, // Assurez-vous que cette colonne n'est pas nullable
      //   references: {
      //     model: "domaines", // Nom de la table référencée
      //     key: "domaineId", // Clé de la table référencée
      //   },
      // },
    },
    {
      timestamps: true,
      createdAt: true,
      updateAt: "updateTimestamp",
    }
  );

  return sujet;
};
// export { domaine};
module.exports = {domaine , sujet};