const { z } = require("zod");

// Creating an object schema
const chatLogSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  question: z
    .string({ required_error: "Question is required" })
    .min(3, { message: "Question must be at least of 3 characters" })
    .max(1024, "Question can't be greater than 1024 characters"),
});

module.exports = chatLogSchema;