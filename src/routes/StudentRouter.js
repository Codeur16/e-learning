const express = require("express");
const router = express.Router();

const {
  StudentRegistration,
  StudentLogin,
  deleteStudent,
  updateStudent,
  getStudentById,
  getAllStudents,
} = require("../controllers/StudentAuth");

router.post("/create", StudentRegistration);
router.post("/login", StudentLogin);
router.delete("/delete/:id", deleteStudent);
router.put("/update/:id", updateStudent);
router.get("/get/:id", getStudentById);
router.get("/get", getAllStudents);


module.exports = router;
