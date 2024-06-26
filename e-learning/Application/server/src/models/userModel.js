const student = (sequelize, DataTypes) => {
  const student = sequelize.define(
    "student",
    {
      studentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      prenom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateNaissance: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          msg: "l'email est déjà utilisé",
        },
        allowNull: false,
      },
      preference: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sexe: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 6,
        },
      },
     
    },
    {
      timestamps: true,
      createdAt: true,
      updateAt: "updateTimestamp",
    }
  );
  // Association avec le modèle Cours
  // student.associate = (models) => {
  //   student.belongsToMany(models.Cours, {
  //     through: "studentCours",
  //     foreignKey: "studentId",
  //   });
  //};
  return student;
};

// export { student, formateur, administrateur };

const formateur = (sequelize, DataTypes) => {
  const formateur = sequelize.define(
    "formateur",
    {
      formateurId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      prenom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateNaissance: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          msg: "l'email est déjà utilisé",
        },
        allowNull: false,
      },
      preference: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sexe: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 6,
        },
      },
      cv: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      actif: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "false",
      },
      adminId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      createdAt: true,
      updateAt: "updateTimestamp",
    }
  );

  // Association avec le modèle Cours
  // student.associate = (models) => {
  //   student.belongsToMany(models.Cours, {
  //     through: "studentCours",
  //     foreignKey: "studentId",
  //   });
  //};

  return formateur;
};


const admin = (sequelize, DataTypes) => {
  const admin = sequelize.define(
    "admin",
    {
      adminId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      prenom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateNaissance: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          msg: "l'email est déjà utilisé",
        },
        allowNull: false,
      },
      preference: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sexe: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 6,
        },
      },
    },
    {
      timestamps: true,
      createdAt: true,
      updateAt: "updateTimestamp",
    }
  );
  // Association avec le modèle Cours
  // student.associate = (models) => {
  //   student.belongsToMany(models.Cours, {
  //     through: "studentCours",
  //     foreignKey: "studentId",
  //   });
  //};
  return admin;
};
module.exports = { student, formateur , admin};
