const Request = require("../model/request");

const { sendConfirmationMail } = require("../services/mailer");
const { getConfirmationHtml } = require("../services/confirmationHtml");


const { body, validationResult } = require("express-validator");

exports.getHomePage = (req, res) => {
  res.render("pages/index", { title: "Home" });
};

exports.getRequestRepairPage = (req, res) => {
  res.render("pages/request-repair", { title: "Request Repair" });
};

exports.postRequestRepair = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // ❌ Validation failed
    return res.status(400).render("pages/request-repair", {
      errors: errors.array(),
      data: req.body, // to refill form fields
    });
    
  }

  const { fullName, email, phone, pcModel, issue, budget, repairTime } =
    req.body;
    console.log(req.body);
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
    console.log("Request saved to DB", "controllers/public.js/26");
    sendConfirmationMail(email, "Pc Repair Request Recieved", html);
  });
  res.redirect("/");
};
