const bcrypt = require("bcrypt");
const { User } = require("../models/user.model");

// User Registration Controller
const signupUser = async (req, res) => {
  try {
    // Create a new user with the request body data
    const user = await User.create(req.body);
    const { firstName, lastName } = user;

    // Send a success response with a welcome message
    res.status(201).json({
      status: "success",
      message: `Congratulations ${firstName} ${lastName} ! Your account has been successfully created.`,
    });

    // Log the request body to the console for debugging purposes
    console.log(req.body);
  } catch (error) {
    // Send an error response if user registration fails
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

    // Find the user by email or username
    let user = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });

    if (!user) {
      // Send an error response if user is not found
      res.status(401).json({ message: "User not found!" });
    } else {
      // Retrieve the stored, hashed password from the user's record
      const hashedPassword = user.password;

      // Verify the user-provided password against the stored hash using bcrypt's secure comparison
      const isPasswordMatch = await bcrypt.compare(password, hashedPassword);

      if (!isPasswordMatch) {
        // Send an error response if the password is invalid
        return res.status(401).json({ message: "Invalid Password" });
      } else {
        // Send a success response with a welcome message
        res.status(200).json({
          status: "success",
          message: `Welcome back, ${user.firstName} ${user.lastName}! You have logged in successfully.`,
        });
      }
    }
  } catch (error) {
    // Send an error response if something goes wrong
    res.status(500).json({
      Message: "Something went wrong",
      error: error.name,
      error: error.message,
    });
  }
};

// User Logout Controller
const logoutUser = () => {
  // Placeholder for user logout functionality
};

// User Password Forgot Controller
const forgotUserPassword = () => {
  // Placeholder for user password forgot functionality
};

// User Password Reset Controller
const resetUserPassword = () => {
  // Placeholder for user password reset functionality
};

// Delete User Controller
const deleteUser = () => {
  // Placeholder for delete user functionality
};

module.exports = {
  signupUser,
  loginUser,
  logoutUser,
  forgotUserPassword,
  resetUserPassword,
  deleteUser,
};
