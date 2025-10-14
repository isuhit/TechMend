const express = require("express");
const app = express();
const session = require("express-session");




const bodyParser = require("body-parser");

const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const adminRoutes = require("./routes/admin");
const publicRoutes = require("./routes/public")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.use(publicRoutes)
app.use("/admin", adminRoutes);

module.exports = app