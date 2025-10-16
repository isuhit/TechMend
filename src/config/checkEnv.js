// src/config/checkEnv.js
require("dotenv").config();

const requiredEnvs = ["MONGODB_URI", "SESSION_SECRET"];

const checkEnv = () => {
  const missing = requiredEnvs.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    console.error(
      `❌ Missing environment variables: ${missing.join(", ")}`
    );
    process.exit(1); // stop app startup immediately
  }
};

module.exports = checkEnv;
