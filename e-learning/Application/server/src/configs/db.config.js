// config/db.config.js

module.exports = {
  HOST: "mysql-175874-0.cloudclusters.net", // L'adresse du serveur de base de données CloudClusters
  USER: "admin", // Votre nom d'utilisateur
  PASSWORD: "ZgIFimc4", // Votre mot de passe
  DB: "institute", // Le nom de votre base de données
  dialect: "mysql", // Le dialecte de la base de données (mysql pour MySQL)
  dialectOptions: {
    connectTimeout: 60000, // 60 seconds
  },
  url: "mysql -h mysql-175874-0.cloudclusters.net -P 10002 -u admin -p",
};
