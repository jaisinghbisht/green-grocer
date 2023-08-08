const express = require("express");
const router = express.Router();
const City = require("../models/cityschema"); // Import your City model

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

module.exports = router;
