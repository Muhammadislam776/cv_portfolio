// Contact Routes
const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const { validateContactForm } = require("../validators/formValidator");

router.post("/", validateContactForm, contactController.sendContact);

module.exports = router;
