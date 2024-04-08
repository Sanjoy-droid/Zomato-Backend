const express = require("express");
const router = express.Router();
const nightlifeModel = require("../models/nightlifeModel");
const resturantModel = require("../models/ResturantModal");
const dataModel = require("../models/dataModel");

// Route 1: Get all Nightlife Posts
router.get("/fetchnightlifeposts", async (req, res) => {
  try {
    const nightlifePosts = await nightlifeModel.find();
    res.json(nightlifePosts);
  } catch (error) {
    console.error("Error fetching nightlife posts:", error);
    res.status(500).json({ error: "Failed to fetch nightlife posts" });
  }
});

// Route 2: Get all Resturant Posts
router.get("/fetchresturantposts", async (req, res) => {
  try {
    const resturantPosts = await resturantModel.find();
    res.json(resturantPosts);
  } catch (error) {
    console.error("Error fetching resturant posts:", error);
    res.status(500).json({ error: "Failed to fetch resturant posts" });
  }
});

// Route 3: Get all Delivery Posts
router.get("/fetchdeliveryposts", async (req, res) => {
  try {
    const deliveryPosts = await dataModel.find();
    res.json(deliveryPosts);
  } catch (error) {
    console.error("Error fetching delivery posts:", error);
    res.status(500).json({ error: "Failed to fetch delivery posts" });
  }
});

module.exports = router;
