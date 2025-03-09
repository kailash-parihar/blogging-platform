const bcrypt = require("bcrypt");
const { User } = require("../models/user.model");

// User Registration Controller
const signupUser = async (req, res) => {
  try {
    let { firstName, lastName } = await User.create(req.body);
    res.status(201).json({
      status: "success",
      message: `Congratulations ${firstName} ${lastName} ! Your account has been successfully created.`,
    });
  } catch (error) {
    res.status(500).json({
      status: "User registration failed",
      error: error.name,
      message: error.message,
    });
  }
};

// User Login Controller
const loginUser = async (req, res) => {
  try {
    let { email, username, password } = req.body;

    let user = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });

    if (!user) {
      res.status(401).json({ message: "User not found!" });
    } else {
      const hashedPassword = user.password;
      const isPasswordMatch = await bcrypt.compare(password, hashedPassword);

      if (!isPasswordMatch) {
        return res.status(401).json({ message: "Invalid Password" });
      } else {
        res.status(200).json({
          status: "success",
          message: `Welcome back, ${user.firstName} ${user.lastName}! You have logged in successfully.`,
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      Message: "Something went wrong",
      error: error.name,
      error: error.message,
    });
  }
};

// User Logout Controller
const logoutUser = () => {};

// User Password Forgot Controller
const forgotUserPassword = () => {};

// User Password Reset Controller
const resetUserPassword = () => {};

// Delete User Controller
const deleteUser = () => {};

module.exports = {
  signupUser,
  loginUser,
  logoutUser,
  forgotUserPassword,
  resetUserPassword,
  deleteUser,
};
