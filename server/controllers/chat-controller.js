const nodemailer = require('nodemailer');
const Chatlog = require("../models/chat-model");
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());

const ChatBox = async (req, res) => {
    // try {
        // const response = req.body;
        // await Chatlog.create(response);

        // const { email, question } = req.body;
        // console.log(email, question);

        // let transporter = nodemailer.createTransport({
      //     host: 'smtp.ethereal.email',
      //     port: 587,
      //     auth: {
      //         user: 'monique91@ethereal.email',
      //         pass: 'Sy38mJGDGQtkWeQEaq'
      //     }
        // });

        // let mailOptions = {
        //     from: email,
        //     to: 'samriti3001@gmail.com',
        //     subject: 'New Question from TechViz Chat',
        //     text: `Question: ${question}\nFrom: ${email}`
        // };

        // transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //     return res.status(500).send(error.toString());
        //     }
        //     res.status(200).send('Email sent: ' + info.response);
        // });
    // } catch(error) {
    //     return next(error);
    // }

    try {
        const response = req.body;
        await Chatlog.create(response);

        // let testAccount = await nodemailer.createTestAccount();

      //   let transporter = await nodemailer.createTransport({
      //     host: 'smtp.ethereal.email',
      //     port: 587,
      //     auth: {
      //         user: 'monique91@ethereal.email',
      //         pass: 'Sy38mJGDGQtkWeQEaq'
      //     }
      // });

      // let info = await transporter.sendMail({
      //   from: '"tester vinod 👻" <testervinod@gmail.com>',
      //   to: "samriti3001@gmail.com",
      //   subject: 'New Question from TechViz Chat',
      //   //     text: `Question: ${question}\nFrom: ${email}`
      //   text: "New Question from TechViz Chat", 
      //   html: "<b>New Question from TechViz Chat</b>", 
      // });

      // console.log("Message sent: %s", info.messageId);
      // res.status(200).json(info);

      // const { email, question } = req.body;
      // console.log({ email, question });
      res.status(200).json({msg: "email sent successfully"});

      } catch (error) {
        console.log(error);
        // res.status(500).json({ message: "message not delivered" });
        return next(error);
      }
};

module.exports = { ChatBox };