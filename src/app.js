const express = require("express");
const bodyParser = require("body-parser");
const indexRouteur = require("../src/routes/indexRouter");
require("dotenv").config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.json());
//port
const port = process.env.PORT || 3000;

//init database
const sequelize = require("./db/sequelize");
sequelize.initDB();

//helloworld
app.get("/", (req, res) => {
  res.send("Hello World to everybody!");
});

//Routage
app.use("/api", indexRouteur);

// Ajoute le gestion d'erreur 404
app.use(({ res }) => {
  const message =
    "Impossible de trouver la ressource! vous pouvez essayer un autre URL";
  res.status(404).json(message);
});

// Demarrage du serveur;
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
