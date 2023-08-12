// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Set up the session middleware
app.use(
  session({
    secret: "your-secret-key",
    name: "uniqueSessionID",
    resave: false,
    saveUninitialized: false,
  })
);

// MongoDB connection
const uri =
  "mongodb+srv://greengrocer:Wglwdzy2PCf0cPNG@cluster0.jzddl2j.mongodb.net/test"; // Replace with your MongoDB URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Import City model
const City = require("./models/cityschema");
const User = require("./models/userSchema");

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

// Add to Cart functionality
app.post("/api/add-to-cart", async (req, res) => {
  const { userId, itemName, itemPrice } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Add the item to the user's cart
    user.cart.push({
      name: itemName,
      price: itemPrice,
      quantity: 1, // You can adjust this as needed
    });

    await user.save();
    res.json({ message: "Item added to cart successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Data Server is Running at Port No ${PORT}`);
});
