const Router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//Create Post
Router.post("/", async (req, res) => {
  try {
    const newPost = new Post({
      username: req.body.username,
      title: req.body.title,
      description: req.body.description,
      photo: req.body.photo,
    });
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update Post
Router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedPost);
    } else {
      res.status(401).json("Access Denied!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete Post
Router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      const deletedPost = await Post.findByIdAndDelete(req.params.id);
      res.status(200).json("Post Has Been Deleted Successfully!");
    } else {
      res.status(401).json("Access Denied!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Post
Router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    !post && res.status(404).json("post not Found!");
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get All Posts
Router.get("/", async (req, res) => {
  const username = req.body.user;
  const catname = req.body.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catname) {
      posts = await Post.find({
        catagories: {
          $in: [catname],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = Router;
