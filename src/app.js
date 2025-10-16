const express = require("express");
const app = express();
const session = require("express-session");
const MongoStore = require("connect-mongo");

const bodyParser = require("body-parser");
const path = require("path");

const helmet = require("helmet");
const compression = require("compression");
const rateLimit = require("express-rate-limit");

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://cdn.tailwindcss.com", "'unsafe-inline'"],
        styleSrc: ["'self'", "https://fonts.googleapis.com", "'unsafe-inline'"],
        fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
        imgSrc: ["'self'", "data:", "https:"],
      },
    },
  })
);

app.use(compression());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000,
    message: "Too many requests from this IP, please try again later.",
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
      collectionName: "sessions",
      ttl: 14 * 24 * 60 * 60, // 14 days
    }),
    cookie: {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      secure: false,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 2,
    },
  })
);
const adminRoutes = require("./routes/admin");
const publicRoutes = require("./routes/public");

app.use(publicRoutes);
app.use("/admin", adminRoutes);

//404 handler
app.use((req, res) => {
  res.status(404).render("pages/404");
});

// General error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err.stack);

  console.log(err);
  res.status(500).render("pages/500");
});

module.exports = app;
