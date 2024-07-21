require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const chatRoute = require("./router/chat-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const bodyParser = require("body-parser");

const path = require("path");

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(bodyParser.json());

app.use(cors(corsOptions));

app.use(express.json());

// module.exports = {
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'bundle.js',
//   },
// };

const _dirname = path.dirname("");
const buildpath = path.join(_dirname,"../vite-project/dist");
app.use(express.static(buildpath));

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/chatbox", chatRoute);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;



connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at port: ${PORT}`);
    });
});
