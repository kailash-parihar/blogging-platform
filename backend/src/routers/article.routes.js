const express = require("express");
const articleRouter = express.Router();

const { createArticle } = require("../controllers/article.controller");

articleRouter.post("create", createArticle);
module.exports = { articleRouter };
