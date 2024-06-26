const {
  getCurrentChapitre,
  getCompletedChaptersCount,
} = require("../controllers/suivicoursControllers");
const express = require("express");
const router = express.Router();

router.get("/get/:studentId/:coursId/current", getCurrentChapitre);
router.get("/get/:studentId/:coursId/completed", getCompletedChaptersCount);
module.exports = router;