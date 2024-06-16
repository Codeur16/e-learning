const { ValidationError } = require("sequelize");
const bcrypt = require("bcrypt");
const { FormateurTable } = require("../../db/sequelize");

const FormateurRegistration = (req, res) => {
  const { nom, prenom, age, email, preference, sexe, role, password } =
    req.body;
  if (
    !nom ||
    !prenom ||
    !age ||
    !email ||
    !preference ||
    !sexe ||
    !role ||
    !password
  ) {
    return res.status(400).json({
      message: "Veuillez remplir tous les champs.",
    });
  }
  const hash = bcrypt.hashSync(password, 10);
  const newFormateur = {
    nom,
    prenom,
    age,
    email,
    preference,
    sexe,
    role,
    password: hash,
  };
  FormateurTable.create(newFormateur)
    .then((createdFormateur) => {
      const message = "Le formateur " + req.body.nom + " a bien été créé";
      res.status(200).json({ message, data: createdFormateur });
    })
    .catch((err) => {
      if (err instanceof ValidationError) {
        return res.status(400).json({ message: err.message, data: err });
      }
      res.status(500).json({
        message: "Erreur lors de l'ajout d'un user! Reessayer plus tard",
        err,
      });
    });
};

const FormateurLogin = (req, res) => {
  const email = req.body.email;
  FormateurTable.findOne({ where: { email: email } })
    .then((Formateur) => {
      if (!Formateur) {
        const message = "le formateur demandé est inexistant";
        return res.status(404).json({ message });
      } else {
        bcrypt
          .compare(req.body.password, Formateur.password)
          .then((isPasswordValid) => {
            if (!isPasswordValid) {
              const message = "Le mot de passe est incorrect!";
              return res.status(401).json({ message });
            }
            // JWT
            // const token = jwt.sign(
            //   {
            //     clientsId: Formateur.id,
            //   },
            //   privatekey,
            //   { expiresIn: "1000h" }
            // );
            const message = "Le formateur a ete connecte avec succes!";
            return res.status(200).json({
              message,
              data: Formateur,
              //, token: token
            });
          });
      }
    })
    .catch((err) => {
      const message = "La connexion a echoue! réessayez dans quelques instants";
      return res.status(500).json({ message, data: err });
    });
};

module.exports = { FormateurRegistration, FormateurLogin };
