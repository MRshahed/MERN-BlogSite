require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoute = require("./routes/Auth");
const userRoute = require("./routes/Users");
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL);
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen("3000", () => {
  console.log("Server is running on Port 3000");
});
