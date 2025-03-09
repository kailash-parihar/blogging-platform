const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  res.send(`<div style="text-align: center;"><h1>Welcome, Kailash</h1></div>`);
});

module.exports = { homeRouter };
