const { getIO } = require("../socket");
require("dotenv").config();

function notifyUser(req, res) {
  const { message } = req.body; 
  const AdminId = process.env.ADMIN_ID;

  const io = getIO();

  io.to(AdminId).emit("order:update", message);

  res.send({ status: "ok" });
}

module.exports = { notifyUser };