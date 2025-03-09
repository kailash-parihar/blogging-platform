const { Article } = require("../models/article.model");

const createArticle = (req, res) => {
    try {
        let post=Article.create()
    } catch (error) {
        
    }
};
module.exports = { createArticle };
