const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  rating: Number,
  discount: Number,
  price: Number,
  time: Number,
  image: String,
  veg: Boolean,
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
