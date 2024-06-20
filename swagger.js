const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "INSTITUTE API",
      description:
        "API endpoints for a mini blog services documented on swagger",
      contact: {
        name: "loico",
        //email: "info@miniblog.com",
        // url: "https://github.com/DesmondSanctity/node-js-swagger",
      },
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "serveur local",
      },
      {
        url: "https://e-learning-production-00fa.up.railway.app",
        description: "serveur heberge",
      },
    ],
  },
  // looks for configuration in specified directories

  //   apis: ["./routes/*.js"],
  // apis: ["./src/routes/StudentRouter.js"],
  // Utilisation de l'expression glob pour inclure tous les fichiers de route
  apis: [path.join(__dirname, "./src/routes/*.js")],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {     
  // Swagger Page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Documentation in JSON format
  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
}

module.exports = { swaggerDocs };
