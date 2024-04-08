require("dotenv").config();
const mongoose = require("mongoose");

const mongoURI = process.env.MONGOURI;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Sanjoy-droid Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;
