// db/conn.js

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const uri = process.env.DATABASE;
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected Successfully");
  } catch (error) {
    console.error(error);
  }
}
connect();
