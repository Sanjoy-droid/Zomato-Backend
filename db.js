const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://guinsanjoy34:M561hn1Odgn0Fygg@cluster0.qojyfsi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Sanjoy-droid Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;
