const { getIO } = require("../socket");

function notifyUser(req, res) {
  const { userId, message } = req.body;

  const io = getIO();

  io.to(userId).emit("order:update", message);

  res.send({ status: "ok" });
}

module.exports = { notifyUser };