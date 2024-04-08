const mongoose = require("mongoose");

const resturantSchema = new mongoose.Schema({
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
});

const Resturant = mongoose.model("Resturant", resturantSchema);

module.exports = Resturant;
