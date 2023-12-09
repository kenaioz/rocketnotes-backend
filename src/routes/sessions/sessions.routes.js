const express = require("express");

const SessionsController = require("../../controllers/sessions/SessionsController");

const sessions = express.Router();

const sessionsController = new SessionsController();
sessions.post("/", sessionsController.create);

module.exports = sessions;
