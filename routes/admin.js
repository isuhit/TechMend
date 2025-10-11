const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

function isAdmin(req, res, next) {
  if (req.session.admin) {
    return next();
  }

  res.redirect("/admin/login");
}

router.get("/login", adminController.getAdminLoginPage);
router.post("/login", adminController.postAdminLogin);
router.get("/dashboard", isAdmin, adminController.getAdmindashboard);
router.post("/update/:id", isAdmin, adminController.postUpdateStatus);
router.post("/logout", isAdmin, adminController.postAdminLogout);

module.exports = router;
