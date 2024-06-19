const {  UserLogin} =require("../controllers/loginController");

const express = require("express");
const router = express.Router();
// const { verifyToken } = require("../middleware/authJwt");
router.post("/login",  UserLogin);
module.exports = router;  //exporting the router