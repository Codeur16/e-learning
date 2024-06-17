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