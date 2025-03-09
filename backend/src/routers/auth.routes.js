const express = require("express");
const authRouter = express.Router();

// Importing Controller for these endpoints
const {
  signupUser,
  loginUser,
  logoutUser,
  forgotUserPassword,
  resetUserPassword,
  deleteUser,
} = require("../controllers/auth.controller");

authRouter.post("/signup", signupUser);
authRouter.post("/login", loginUser);
authRouter.post("/logout", logoutUser);
authRouter.post("/forgot-password", forgotUserPassword);
authRouter.post("/reset-password", resetUserPassword);
authRouter.post("/delete-user", deleteUser);

module.exports = { authRouter };
