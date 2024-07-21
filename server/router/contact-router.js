const express = require("express");
const router = express.Router();

const contactForm = require("../controllers/contact-controllers");
const messageSchema = require("../validators/contact-validator");
const validate = require("../middlewares/validate-middleware");

router.route("/contact").post(validate(messageSchema), contactForm);

module.exports = router;