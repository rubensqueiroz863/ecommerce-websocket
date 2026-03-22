const express = require("express");
const http = require("http");
const cors = require("cors");
const notificationRoutes = require("./routes/notificationRoutes");

const { initSocket } = require("./socket");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = initSocket(server);

app.get("/", (req, res) => {
  res.send("Server running");
});

app.use("/api", notificationRoutes);

server.listen(3001, () => {
  console.log("ecommerce-websocket running in 3001");
});