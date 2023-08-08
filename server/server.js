const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const uri =
  "mongodb+srv://greengrocer:Wglwdzy2PCf0cPNG@cluster0.jzddl2j.mongodb.net/test";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MongoDB");
});

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

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
