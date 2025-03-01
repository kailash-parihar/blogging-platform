const express = require("express");
const authRouter = express.Router();

const { signupUser, loginUser, logoutUser, forgotUserPassword, resetUserPassword } = require("../controllers/auth.controller");

authRouter.post("/signup", signupUser);
authRouter.post("/login", loginUser);
authRouter.post("/logout", logoutUser);
authRouter.post("/forgot-password", forgotUserPassword);
authRouter.post("/reset-password", resetUserPassword);

module.exports = { authRouter };
