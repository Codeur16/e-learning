const {  createChapitre,
  getAllchapitres,
  getchapitreById,
  updatechapitre,
  deletechapitre} =require("../controllers/chapitreControllers");

const express = require("express");
const router = express.Router();
// const { verifyToken } = require("../middleware/authJwt");
router.post("/create/:idcours",  createChapitre);
router.put("/update/:id",  updatechapitre);
router.get("/get",  getAllchapitres);
router.get("/get/:id",  getchapitreById);
router.delete("/delete/:id",  deletechapitre);
module.exports = router;  //exporting the router