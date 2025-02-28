const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;

const { dbConfig } = require("./src/configurations/db.config");

app.get("/", (req, res) => {
  res.send(`
    <div style="text-align: center;">
      <h1>Welcome, Kailash! This Is Backend For Blogging Application</h1>
    </div>
  `);
});

app.listen(port, () => {
  dbConfig();
  console.log(`\nServer is start running on http://127.0.0.1:${port}/`);
});
