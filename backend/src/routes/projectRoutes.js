// Project Routes
const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.route("/")
  .get(projectController.getProjects)
  .post(projectController.createProject);

router.route("/:id")
  .get(projectController.getProjectById);

module.exports = router;
