const { ValidationError } = require("sequelize");
const bcrypt = require("bcrypt");
const { StudentTable, FormateurTable } = require("../db/sequelize");

const sendResponse = (res, statusCode, message, data = null) => {
  res.status(statusCode).json({ message, data });
};

const UserLogin = async (req, res) => {
  const email = req.body.email;

  try {
    let user = await StudentTable.findOne({ where: { email: email } });
    let userType = "Student";

    if (!user) {
      user = await FormateurTable.findOne({ where: { email: email } });
      userType = "Formateur";
    }

    if (!user) {
      return sendResponse(res, 201, "L'utilisateur demandé est inexistant");
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return sendResponse(res, 201, "Le mot de passe est incorrect!");
    }

    const message = `${userType} a été connecté avec succès!`;
    sendResponse(res, 200, message, { ...user.toJSON(), userType });
  } catch (err) {
    const message = "La connexion a échoué! Réessayez dans quelques instants";
    sendResponse(res, 500, message, err);
  }
};

module.exports = { UserLogin };
