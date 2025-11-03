const express = require("express");
const router = express.Router();

const { body, validationResult } = require("express-validator");

const publicController = require("../controllers/public");

router.get("/", publicController.getHomePage);

router.get("/request-repair", publicController.getRequestRepairPage);

router.post(
  "/request-repair",
  [
    body("fullName")
      .notEmpty()
      .withMessage("Name is required")
      .isLength({ max: 50 })
      .withMessage("Name too long")
      .matches(/^[a-zA-Z\s]+$/)
      .withMessage("Name must contain only letters and spaces"),
    body("email")
      .trim()
      .isEmail()
      .withMessage("Please provide a valid email")
      .normalizeEmail(),
    body("phone")
      .trim()
      .notEmpty()
      .withMessage("Phone number is required")
      .matches(/^\+?\d{10,15}$/)
      .withMessage("Invalid phone number"),
    body("pcModel")
      .trim()
      .notEmpty()
      .withMessage("Device field cannot be empty")
      .escape(),
    body("issue")
      .trim()
      .notEmpty()
      .withMessage("Issue description required")
      .isLength({ min: 10 })
      .withMessage("Please describe the issue in detail")
      .escape(),
  ],
  publicController.postRequestRepair
);

router.get("/request-confirmation", publicController.getRequestConfirmationPage)

module.exports = router;
