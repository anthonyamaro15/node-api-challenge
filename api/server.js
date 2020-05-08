const express = require("express");
const cors = require("cors");
const projectRouter = require("../projects/projectRoute");
const actionRouter = require("../actions/actionRoute");

const server = express();

server.use(express.json());
server.use(cors());

server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

module.exports = server;
