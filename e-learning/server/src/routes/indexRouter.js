
const express = require("express");
const router = express.Router();

const StudentRouter = require("./StudentRouter");
const FormateurRouter = require("./FormateurRouter");
const CoursRouteur = require("./CoursRouteur");
const EvaluationRouter = require("./EvaluationRouter");
const DomainRouteur = require("./DomainRouteur");
const SujetRouteur = require("./SujetRouter");
const ChapitreRouteur = require("./ChapitreRouter");
const LoginRouteur = require("./loginRouter");
//const AdminRouter = require("./AdminRouter");
const QuestionRouter = require("./QuestionRouter");
const ReponseRouter = require("./ReponseRouter")
const SuivicoursRouter = require("./suivicoursRouter");

router.use("/api/student", StudentRouter);
router.use("/api/formateur", FormateurRouter);
router.use("/api/cours", CoursRouteur);
router.use("/api/evaluation", EvaluationRouter);
router.use("/api/domain", DomainRouteur);
router.use("/api/sujet", SujetRouteur);
router.use("/api/chapitre", ChapitreRouteur);
router.use("/api/user", LoginRouteur);
//router.use("/api/admin", AdminRouter);
router.use("/api/question", QuestionRouter);
router.use("/api/reponse", ReponseRouter);
router.use("/api/suivicours", SuivicoursRouter);

module.exports = router;
