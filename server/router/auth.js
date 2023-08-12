// auth.js

const express = require("express");
const router = express.Router();
const City = require("../models/cityschema"); // Import your City model
const User = require("../models/userSchema"); // Import your User model

router.get("/cities", async (req, res) => {
  try {
    const cities = await City.find({}, { name: 1 }); // Fetch only city names
    res.json(cities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/city/:cityName", async (req, res) => {
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
router.post("/add-to-cart", async (req, res) => {
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

module.exports = router;
