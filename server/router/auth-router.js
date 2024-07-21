const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const authValidators = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");

// app.get("/", (req, res) => {
//     res.status(200).send("Welcome to my website");
// });

router.route("/").get(authcontrollers.home);

// app.get("/register", (req,res) => {
//     res.status(200).send("Welcome to Registration Page.");
// });

router.route("/register").post(validate(authValidators.signupSchema), authcontrollers.register);
router.route("/login").post(validate(authValidators.signInSchema), authcontrollers.login);

module.exports = router;