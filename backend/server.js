// mergedServer.js
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const paymentRoutes = require("./paymentController");
const app = express();
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
var bodyParser = require("body-parser");

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Set up the session middleware
app.use(
  session({
    secret: "your-secret-key",
    name: "uniqueSessionID",
    resave: false,
    saveUninitialized: false,
  })
);

require("./db/conn");
app.use(require("./router/authlogin"));

// Import City model
const City = require("./models/cityschema");

// Routes
app.get("/api/cities", async (req, res) => {
  try {
    const cities = await City.find({}, { name: 1 });
    res.json(cities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/city/:cityName", async (req, res) => {
  const cityName = req.params.cityName;

  try {
    const city = await City.findOne({ name: cityName });

    if (!city) {
      return res.status(404).json({ message: "City not found" });
    }

    res.json(city);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Import routes from auth.js
const authRoutes = require("./router/auth");
const { config } = require("dotenv");
app.use("/api", authRoutes);

app.use("/api/payment/", paymentRoutes);

app.listen(PORT, () => {
  console.log(`Server is Running at Port No ${PORT}`);
});
