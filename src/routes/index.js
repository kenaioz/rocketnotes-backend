const express = require("express");

const users = require("./users/users.routes");
const ping = require("./ping/ping.routes");
const notes = require("./notes/notes.routes");
const tags = require("./tags/tags.routes");
const sessions = require("./sessions/sessions.routes");

const routes = express.Router();

routes.use("/", ping);
routes.use("/sessions", sessions);
routes.use("/users", users);
routes.use("/notes", notes);
routes.use("/tags", tags);

module.exports = routes;
