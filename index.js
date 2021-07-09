require("dotenv").config();
require("./config/db.config");

const logger = require("morgan");
const path = require("path");
const express = require("express");
const app = express();
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use 'public' folder for : css, js, etc
app.use(express.static(path.join(__dirname, "public")));

// Set views to 'views' folder
app.set("views", path.join(__dirname, "views"));
// Set view engine to 'pug'
app.set("view engine", "pug");

// API Version : 1.0
const api_v1 = require("./apis/api_v1.0");
app.use("/api_v1.0", api_v1);

const auth = require("./routes/Login.route");
app.use("/auth", auth);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(`Server started on http://${HOSTNAME}:${PORT}`);
    return;
  }
});