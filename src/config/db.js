const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  return mongoose
    .connect(process.env.MONGODB_URI, {})
    .then((result) => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.error("DB connection error:", err);
      process.exit(1);
    });
};

module.exports = connectDB;
