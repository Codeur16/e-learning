const express = require("express");
const bodyParser = require("body-parser");
const indexRouteur = require("../src/routes/indexRouter");
const swaggerFile = require("./swagger");
require("dotenv").config();

 const swaggerJsdoc = require ( "swagger-jsdoc" );
  const swaggerUi = require("swagger-ui-express");
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


// configuration du swqgger  

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "Documentation for your API",
    },
    servers: [
      {
        url: "http://localhost:3001",
        description: "Development server",
      },
    ],
  }, 
  apis: ["./routes/*.js"], // Spécifiez ici le chemin vers vos fichiers de routes
};

//const swaggerSpec = swaggerJSDoc(options);
const specs = swaggerJsdoc(options);
/**
 * Configuration Swagger, exposition de la doc sur la route /doc
 */
// app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });
// Demarrage du serveur;
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
