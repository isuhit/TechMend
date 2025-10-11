const express = require("express");
const app = express();
const port = 5050;
const mongoose = require("mongoose");
const Request = require("./model/request");
const session = require("express-session");
require("dotenv").config();

const { sendConfirmationMail } = require("./services/mailer");
const { getConfirmationHtml } = require("./services/confirmationHtml");

const bodyParser = require("body-parser");

const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const adminRoutes = require("./routes/admin");

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

app.get("/", (req, res) => {
  res.render("pages/index", { title: "Home" });
});

app.get("/request-repair", (req, res) => {
  res.render("pages/request-repair", { title: "Request Repair" });
});

app.post("/request-repair", (req, res) => {
  const { fullName, email, phone, pcModel, issue, budget, repairTime } =
  req.body;
  const request = new Request({
    name: fullName,
    email: email,
    phone: phone,
    pcModel: pcModel,
    issueDescription: issue,
    repairDate: repairTime,
    budget: budget,
  });
  const html = getConfirmationHtml({ name: fullName, repairId: request._id });
  request.save().then((result) => {
    console.log("Request saved to DB");
    console.log(result);
    sendConfirmationMail(email, "Pc Repair Request Recieved", html);
  });
  res.redirect("/");
});

app.use("/admin", adminRoutes);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(port, () => {
      console.log(`Server is running on Port: ${port}`);
    });
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
