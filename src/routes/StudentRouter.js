const express = require("express");
const router = express.Router();

const {
  StudentRegistration, StudentLogin
} = require("../controllers/studentControllers/StudentAuth");

router.post("/create", StudentRegistration);
router.post("/login", StudentLogin);

module.exports = router;
