const express = require("express");
const http = require("http");
const cors = require("cors");
const notificationRoutes = require("./routes/notificationRoutes");
require("dotenv").config();

const { initSocket } = require("./socket");
const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = initSocket(server);

app.get("/", (req, res) => {
  res.send("Server running");
});

app.use("/api", notificationRoutes);

server.listen(port, () => {
  console.log("ecommerce-websocket running in 3001");
});