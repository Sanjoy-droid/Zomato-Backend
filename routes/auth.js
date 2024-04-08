require("dotenv").config();

const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

var fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = process.env.JWT_SECRET;
// Route 1: Create a User using: POST "/api/auth/createuser"
router.post(
  "/createuser",
  [
    body("name", "Name must have minimum three character!!!").isLength({
      min: 3,
    }),
    body("email", "Enter a valid Email!!!").isEmail(),
    body(
      "password",
      "Passwords must contain minimum six character!!!"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          success,
          error: "Sorry a user with this email already exists",
        });
      }
      // Create hash
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Create a new User
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Sever Error Occurred!!!");
    }
  }
);

// Route 2: Authenticate a User using: POST "/api/auth/login"
router.post(
  "/login",
  [
    body("email", "Enter a valid Email!!!").isEmail(),
    body("password", "password can not be blanked!!!").exists(),
  ],
  async (req, res) => {
    let success = false;
    // If there are errors, return the bad requests and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      // Password Comparision
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials",
        });
      }
      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Sever Error Occurred!!!");
    }
  }
);

// Route 3: Get logged in User Details using POST "/api/auth/getuser". Login required

router.post(
  "/getuser",
  fetchuser,

  async (req, res) => {
    // If there are errors, return the bad requests and the errors
    try {
      const userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Sever Error Occurred!!!");
    }
  }
);
module.exports = router;
