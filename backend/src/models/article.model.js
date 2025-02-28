const mongoose = require("mongoose");

/**
 * Article Schema: Defines the structure for Article documents.
 */
const articleSchema = new mongoose.Schema(
  {
    articleTitle: {
      type: String,
      required: [true, "Please provide the article title."],
      minlength: [10, "Article title must be at least 10 characters long."],
      trim: true,
    },
    articleDescription: {
      type: String,
      required: [true, "Please provide the article description."],
      minlength: [10, "Article description at least 10 characters long."],
      maxlength: [200, "Article description cannot exceed 200 characters."],
      trim: true,
    },
    /**
     * User Reference: references the User who created the article.
     * Must be a valid ObjectId from the User collection.
     */
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User reference is required."],
    },
    /**
     * Article Image URL: Optional field to store the URL of the article image.
     * Defaults to an empty string if not provided.
     */
    articleImageUrl: {
      type: String,
      default: "",
      trim: true,
    },
    tags: {
      type: String,
      default: "blog",
      lowercase: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", articleSchema);
module.exports = { Article };
