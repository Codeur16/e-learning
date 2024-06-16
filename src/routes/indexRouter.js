// const { StudentRouter } = require("./etudiantRouter")
// const router = express.Router();
// module.exports=(app)=>{
// StudentRouter(app);
// }

const express = require("express");
const router = express.Router();

const StudentRouter = require("./StudentRouter");
const FormateurRouter = require("./FormateurRouter");
const CoursRouteur = require("./CoursRouteur");
const EvaluationRouter = require("./EvaluationRouter");
const DomainRouteur = require("./DomainRouteur")

router.use("/student", StudentRouter);
router.use("/formateur", FormateurRouter);
router.use("/cours", CoursRouteur);
router.use("/evaluation", EvaluationRouter);
router.use("/domain", DomainRouteur);

module.exports = router;
