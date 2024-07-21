const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try{
        res.status(200).json({ message: "Welcome to our home Page" });
    } catch (error) {
        // console.log(error);
        return next(error);
    }
};

const register = async (req, res) => {
    try {
      //const data = req.body;
      console.log(req.body);
      const { username, email, phone, password } = req.body;

      const userExist = await User.findOne({ email:email });

      if(userExist) {
        return res.status(400).json({ msg: "email already exists" });
      }

      // hash the password
      // const saltRound = 10;
      // const hash_password = await bcrypt.hash(password, saltRound);

      // await User.create({ username, email, password: hash_password });

      const userCreated = await User.create({
        username, 
        email, 
        phone, 
        password,
      });
      
      // res.status(201).json({ message: "Welcome to Registration Page" });
      res.status(201).json({ 
        msg: userCreated, 
        token: await userCreated.generateToken(), 
        userId: userCreated._id.toString(),
      });
    } catch (error) {
      // res.status(500).json({ message: "Internal server error" });
      return next(error);
    }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // const isPasswordValid = await bcrypt.compare(password, userExist.password);
    const isPasswordValid = await userExist.comparePassword(password);

    if (isPasswordValid) {
      res.status(200).json({
        message: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });

    } else {
      res.status(401).json({ message: "Invalid email or passord " });
    }

  } catch (error) {
    // res.status(500).json("Internal Server Error");
    return next(error);
  }
};


module.exports = { home,register,login };