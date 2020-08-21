require("dotenv").config();

const express = require("express");
const Router = require("./routes/router.js");
require("./database/connection");
const server = express();
server.use(express.json());
server.use(Router);
server.get("/", (req, res) => {
  res.send({ message: "Hello " });
});

module.exports = server;
