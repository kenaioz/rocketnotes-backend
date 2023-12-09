const express = require("express");

const TagsController = require("../../controllers/tags/TagsController");
const ensureAuthenticated = require("../../middlewares/ensureAuthenticated");

const tags = express.Router();

const tagsController = new TagsController();
tags.get("/", ensureAuthenticated, tagsController.index);

module.exports = tags;
