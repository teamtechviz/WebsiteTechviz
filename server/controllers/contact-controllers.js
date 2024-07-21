const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(201).json({ message: "Message Send Successfully" });
  } catch (error) {
    console.error(error);
    // res.status(500).json({ message: "message not delivered" });
    return next(error);
  }
};

module.exports = contactForm;