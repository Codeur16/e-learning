const { getCurrentChapitre }= require("../controllers/suivicoursControllers");
const express = require("express");
const router = express.Router();

router.get("/get/:studentId/:coursId/current", getCurrentChapitre);

module.exports = router;