const express = require("express");

const UsersController = require("../../controllers/users/UsersController");
const UserAvatarController = require("../../controllers/avatar/UserAvatarController");
const ensureAuthenticated = require("../../middlewares/ensureAuthenticated");

const users = express.Router();

const multer = require("multer");
const uploadConfig = require("../../configs/upload");

const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

users.post("/", usersController.create);
users.put("/", ensureAuthenticated, usersController.update);
users.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  userAvatarController.update
);

module.exports = users;
