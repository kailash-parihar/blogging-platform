const express = require("express");
const userRouter = express.Router();

userRouter.get("/", () => {}); // get all users
userRouter.post("/", () => {}); // create user
userRouter.get("/:userId", () => {}); // get user by ID
userRouter.patch("/:userId", () => {}); // update user
userRouter.delete("/:userId", () => {}); // delete user
userRouter.get("/:userId/profile", () => {}); // get user profile
module.exports = { userRouter };
