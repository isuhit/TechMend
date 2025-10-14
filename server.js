const mongoose = require("mongoose");
require("dotenv").config();
const port = 5050;
const app = require("./src/app")

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