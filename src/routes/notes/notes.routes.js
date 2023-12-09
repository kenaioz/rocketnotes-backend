const express = require("express");

const NotesController = require("../../controllers/notes/NotesController");
const ensureAuthenticated = require("../../middlewares/ensureAuthenticated");

const notes = express.Router();

const notesController = new NotesController();

notes.use(ensureAuthenticated);

notes.get("/:id", ensureAuthenticated, notesController.show);
notes.delete("/:id", ensureAuthenticated, notesController.delete);
notes.get("/", ensureAuthenticated, notesController.index);
notes.post("/", ensureAuthenticated, notesController.create);

module.exports = notes;
