const Request = require("../model/request");

const { sendConfirmationMail } = require("../services/mailer");
const {
  getStatusEmail,
} = require("../services/mailer/templates/confirmationHtml");

exports.getAdminLoginPage = (req, res) => {
  res.render("pages/login");
};

exports.postAdminLogin = (req, res) => {
  const { username, password } = req.body;
  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (username === adminUsername && password === adminPassword) {
    req.session.admin = true;
    console.log(req.session);
    req.session.save((err) => {
      if (err) console.error("Session save error:", err);
      res.redirect("/admin/dashboard");
    });
    // res.redirect("/admin/dashboard");
  } else {
    res.status(401).send("Invalid credentials");
  }
};

exports.postUpdateStatus = (req, res) => {
  const id = req.params.id;

  const newStatus = req.body.status;
  Request.findByIdAndUpdate(id, { status: newStatus }, { new: true }).then(
    (response) => {
      const html = getStatusEmail({
        customerName: response.name,
        status: newStatus,
        ticketId: id,
      });
      sendConfirmationMail(
        response.email,
        "Repair request status update",
        html
      );
      res.redirect("/admin/dashboard");
    }
  );
};

exports.getAdmindashboard = (req, res) => {
  Request.find().then((requests) => {
    res.render("pages/admin", {
      title: "Admin",
      requests: requests,
      adminAvatarUrl: "/images/review2.jpeg",
    });
  });
};

exports.postAdminLogout = (req, res) => {
  // req.session.admin = false
  req.session.destroy((err) => {
    if (err) {
      console.log(err, "controllers/admin.js/59");
      res.redirect("/admin/dashboard");
    }
    res.clearCookie("connect.sid");
    res.redirect("/");
  });
};
