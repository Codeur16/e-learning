const express = require("express");
const router = express.Router();

const {
  FormateurLogin,
  FormateurRegistration,
  deleteFormateur,
  updateFormateur,
  getFormateurById,
  getAllFormateurs,
} = require("../controllers/formateurAuth");

router.post("/create/:iddomaine", FormateurRegistration);
router.post("/login", FormateurLogin);
router.delete("/delete/:id", deleteFormateur);
router.put("/update/:id", updateFormateur);
router.get("/get/:id", getFormateurById);
router.get("/get", getAllFormateurs);


module.exports = router;
