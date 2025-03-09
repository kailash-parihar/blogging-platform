/**
 * Main entry point for the application.
 * This script sets up the Express server, configures middleware,
 * initializes the database connection, and defines the routing endpoints.
 */

const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

// Initialize database connection
const { dbConfig } = require("./src/configurations/db.config.js");

// Import routes
const { homeRouter } = require("./src/routers/home.routes.js");
const { authRouter } = require("./src/routers/auth.routes");
const { userRouter } = require("./src/routers/user.routes.js");
const { articleRouter } = require("./src/routers/article.routes");

// Define application routes
app.get("/", homeRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/article", articleRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  dbConfig(); // Establish connection to the database
  console.log(`Server is start running on http://127.0.0.1:${port}/`);
});
