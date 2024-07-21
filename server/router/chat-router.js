const express = require("express");
const router = express.Router();

const chatcontrollers = require("../controllers/chat-controller");
const chatLogSchema = require("../validators/chat-validator");
const validate = require("../middlewares/validate-middleware");

// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');


// app.use(bodyParser.json());

// router.route("/mail").get(chatcontrollers.ChatBox);

// router.route("/mail").post(chatcontrollers.ChatBox);

router.route("/mail").post(validate(chatLogSchema), chatcontrollers.ChatBox);

module.exports = router;

