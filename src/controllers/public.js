const { sendConfirmationMail } = require("../services/mailer");
const { getConfirmationHtml } = require("../services/confirmationHtml");

exports.getHomePage = (req, res) => {
  res.render("pages/index", { title: "Home" });
};

exports.getRequestRepairPage = (req, res) => {
  res.render("pages/request-repair", { title: "Request Repair" });
};

exports.postRequestRepair = (req, res) => {
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
};
