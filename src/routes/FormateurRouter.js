const express = require("express");
const router = express.Router();


const {
  FormateurLogin,
  FormateurRegistration,
} = require("../controllers/formateurController /formateurAuth");

router.post("/create", FormateurRegistration);
router.post("/login", FormateurLogin);

module.exports = router;
