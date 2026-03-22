const express = require("express");
const { notifyUser } = require("../controllers/notificationController");

const router = express.Router();

router.post("/notify", notifyUser);

module.exports = router;