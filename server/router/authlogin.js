const express = require('express')
const router =express.Router();
const jwt=require('jsonwebtoken');
const app = express()
const cors = require('cors');
app.use(cors());

require("../db/conn");
const User= require("../models/userSchema");

app.get('/',  (req, res)=> {
    res.send('Hello World app')
  });
  app.use(express.json())

  // Import the express-session module
  const session = require("express-session");

  // Set up the session middleware
  app.use(
    session({
      secret: "your-secret-key",
      name: "uniqueSessionID",
      resave: false,
      saveUninitialized: false,
    })
  );

  app.post('/register',async(req,res)=>{
    const{fname,lname,username,email,password}=req.body;
    if(!fname || !lname || !username || !email || !password){
      return res.status(422).json({error:"Plz filled the field properly"});
    }
    try{
      const UserExist=await User.findOne({email:email});

      if(UserExist){
        return res.status(422).json({error:"Email already exists"});
      }
      const user=new User({firstname:fname,lastname:lname,username:username,email:email,password:password});
      await user.save();
      return res.status(201).json({error:"user registered successfully"});

    }catch(err){
      console.log(err);
    }
  });

  //login route
  app.post('/signin',async(req,res)=>{
    try{
      let token;
      const{username,password}=req.body;

      if(!username || !password){
        return res.status(400).json({error:"Plz filled the data"});
      }

      const UserLogin= await User.findOne({username:username});

      if(UserLogin){
       // const isMatch= bcrypt.compare(password,UserLogin.password);
         token= await UserLogin.generateAuthToken();

         // Set the session data with the user information
         req.session.user = {
           id: UserLogin._id,
           username: UserLogin.username,
           email: UserLogin.email
         };

         // Set the cookie with the session ID
         res.cookie("uniqueSessionID", req.sessionID, {
          expires:new Date(Date.now()+25892000000),
          httpOnly:true
         });
         
        //if(!isMatch)
        if(password!==UserLogin.password){
          res.status(400)({error:"invaild credentials"});
        }else{
         res.json({ message: 'Login successful' });
        }
      }else{
        res.status(400).json({ msg: "invaild credentials" });
        }      
    }catch(err){
      console.log(err);

    }
  }) 

  // Logout route

app.get("/logout", (req, res) => {
  // Destroy the session data on the server side
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: "Error logging out" });
    }
    // Clear the cookie with the session ID
    res.clearCookie("uniqueSessionID");
    res.json({ message: "Logout successful" });
  });
});

module.exports=app;
