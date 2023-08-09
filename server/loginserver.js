const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;

require("./db/conn");
//const User=require('./models/userSchema');

app.use(require("./router/authlogin"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
