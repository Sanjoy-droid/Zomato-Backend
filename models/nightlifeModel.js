const mongoose = require("mongoose");

// Define the schema for nightlife collection
const nightlifeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  address: String,
  situated: String,
  rating: Number,
  price: Number,
  distance: Number,
  image: String,
  openNow: Boolean,
  outdoorSeating: Boolean,
  gold: Boolean,
});

// Create a Mongoose model for nightlife collection
const Nightlife = mongoose.model("Nightlife", nightlifeSchema);

module.exports = Nightlife;
