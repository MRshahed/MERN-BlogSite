const Router = require("express").Router();
const Catagory = require("../models/Catagory");
const Post = require("../models/Catagory");

Router.post("/", async (req, res) => {
  const newCat = new Catagory(req.body);

  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

Router.get("/", async (req, res) => {
  try {
    const cats = await Catagory.find();
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = Router;
