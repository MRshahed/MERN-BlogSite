const Router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//Create User
Router.post("/register", async (req, res) => {
  try {
    const hashedPass = await bcrypt.hash(req.body.password, saltRounds);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login
Router.post("/login", async (req, res) => {
  try {
    const foundUser = await User.findOne({ username: req.body.username });
    !foundUser && res.status(400).json("User not Found");

    const validated = await bcrypt.compare(
      req.body.password,
      foundUser.password
    );
    !validated && res.status(400).json("Wrong Credentials");

    const { password, ...others } = foundUser._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = Router;
