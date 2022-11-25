require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoute = require("./routes/Auth");
const userRoute = require("./routes/Users");
const postRoute = require("./routes/Posts");
const catRoute = require("./routes/Catagories");
const multer = require("multer");
const path = require("path");
const app = express();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
mongoose.connect(process.env.MONGO_URL);
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post(
  "/api/upload",
  upload.single("file", (req, res) => {
    res.storage(200).json("File has been uploaded");
  })
);

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/catagories", catRoute);

app.listen("5000", () => {
  console.log("Server is running on Port 5000");
});
