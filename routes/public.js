const express = require("express");
const router = express.Router();
const publicController = require("../controllers/public");

router.get("/", publicController.getHomePage);

router.get("/request-repair", publicController.getRequestRepairPage);

router.post("/request-repair", publicController.postRequestRepair);

module.exports = router;
