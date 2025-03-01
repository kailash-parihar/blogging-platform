const { User } = require("../models/user.model");

// User Registration Controller
const signupUser = (req, res) => {
  User.create(req.body)
    .then((response) => {
      res.status(201).json({
        status: "success",
        message: "User successfully registered. Welcome!",
        data: {
          user: {
            id: newUser._id,
            email: newUser.email,
          },
        },
      });
    })
    .catch((error) => {
      console.error("User registration failed:", error);
      res
        .status(500)
        .json({ Message: "User registration failed", error: error });
    });
};

// User Login Controller
const loginUser = () => {};

// User Logout Controller
const logoutUser = () => {};

// User Password Forgot Controller
const forgotUserPassword = () => {};

// User Password Reset Controller
const resetUserPassword = () => {};

module.exports = {
  signupUser,
  loginUser,
  logoutUser,
  forgotUserPassword,
  resetUserPassword,
};
