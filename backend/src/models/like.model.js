const mongoose = require("mongoose");

/**
 * Like Schema: Represents a "like" given by a user to an article.
 * Each like document references a specific Article and a User.
 */
const likeSchema = new mongoose.Schema(
  {
    /**
     * Article reference:
     * References the Article that is liked.
     * Must be a valid ObjectId from the "Article" collection.
     */
    article: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
      required: [true, "Article reference is required."],
    },
    /**
     * User reference:
     * References the User who liked the article.
     * Must be a valid ObjectId from the "User" collection.
     */
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User reference is required."],
    },
  },
  {
    timestamps: true,
  }
);
/**
 * Indexing:
 * Compound index on article and user to ensure that a user can like an article only once.
 */
likeSchema.index({ article: 1, user: 1 }, { unique: true });

const Like = mongoose.model("Like", likeSchema);
module.exports = { Like };
