const express = require("express");
const projectRouter = require("../projects/projectRoute");
const actionRouter = require("../actions/actionRoute");

const server = express();

server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

module.exports = server;
