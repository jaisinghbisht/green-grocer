// models/transactionschema.js
const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to your User model
  },
  cartItems: [
    {
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  transactionId: {
    type: String,
    default: null, // Store the Razorpay transaction ID if generated
  },
  purchaseDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
