const express = require("express");
const server = express();
const cors = require("cors");
const path = require("path");

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.resolve("public")));

server.use("/api/topics", require("./routes/topics"));
server.use("/api/comments", require("./routes/comments"));

module.exports = server;
