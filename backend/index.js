const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;

const { dbConfig } = require("./src/configurations/db.config");
const { authRouter } = require("./src/routers/auth.routes");

app.get("/", (req, res) => {
  res.send(`<div style="text-align: center;"><h1>Welcome, Kailash</h1></div>`);
});

app.use(express.json());
app.use("/api/v1/auth", authRouter);

app.listen(port, () => {
  dbConfig();
  console.log(`\nServer is start running on http://127.0.0.1:${port}/`);
});
