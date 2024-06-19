const {
  createDomaine,
  getAllDomaines,
  getDomaineById,
  updateDomaine,
  deleteDomaine,
} = require("../controllers/domainControllers");

    const express = require("express");
  const router = express.Router();

  router.post("/create", createDomaine);
  router.put("/update/:id", updateDomaine);
  router.get("/get", getAllDomaines);
  router.get("/get/:id", getDomaineById);
  router.delete("/delete/:id", deleteDomaine);


  module.exports = router;
