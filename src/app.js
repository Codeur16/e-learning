const express = require("express");
const bodyParser = require("body-parser");
const indexRouteur = require("../src/routes/indexRouter");
require("dotenv").config();
//const favicon = require("serve-favicon");
const cors = require("cors");
require("events").EventEmitter.defaultMaxListeners = 35;
const app = express();


app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  next();
});
//app.use(favicon(__dirname + "/favicon.ico"));
app.use(bodyParser.json());
app
//  .use(favicon(__dirname + "/favicon.ico"))
  .use(cors())

  .use(bodyParser.json()); 
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
