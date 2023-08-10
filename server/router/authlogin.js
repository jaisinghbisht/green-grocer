const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
app.use(cors());

require("../db/conn");
const User = require("../models/userschema");

app.get("/", (req, res) => {
  res.send("Hello World app");
});
app.use(express.json());

app.post("/register", async (req, res) => {
  const { fname, lname, username, email, password } = req.body;
  if (!fname || !lname || !username || !email || !password) {
    return res.status(422).json({ error: "Plz filled the field properly" });
  }
  try {
    const UserExist = await User.findOne({ email: email });

    if (UserExist) {
      return res.status(422).json({ error: "Email already exists" });
    }
    const user = new User({
      firstname: fname,
      lastname: lname,
      username: username,
      email: email,
      password: password,
    });
    await user.save();
    return res.status(201).json({ error: "user registered successfully" });
  } catch (err) {
    console.log(err);
  }
});

//login route
app.post("/signin", async (req, res) => {
  try {
    let token;
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "Plz filled the data" });
    }

    const UserLogin = await User.findOne({ username: username });

    if (UserLogin) {
      // const isMatch= bcrypt.compare(password,UserLogin.password);
      token = await UserLogin.generateAuthToken();

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httponly: true,
      });

      //if(!isMatch)
      if (password != UserLogin.password) {
        res.status(400).json({ error: "invalid credentials" });
      } else {
        //res.json({message:"user signin successfully"});
        res.json({ message: "Login successful" });
      }
    } else {
      res.status(400).json({ msg: "invaild credentials" });

    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = app;
