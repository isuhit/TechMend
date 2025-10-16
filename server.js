require("dotenv").config();
const app = require("./src/app");
const connectDb = require("./src/config/db");

const checkEnv = require("./src/config/checkEnv");

checkEnv(); // run before anything else

const port = process.env.PORT || 5000;

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on Port: ${process.env.PORT}`);
  });
});
