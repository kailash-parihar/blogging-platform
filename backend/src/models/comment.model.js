const mongoose = require("mongoose");

/**
 * Comment Schema: Defines the structure for Comment documents.
 * Each comment is associated with an Article and a User.
 */
const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, "Comment is required."],
      trim: true,
    },
    /**
     * Article Reference: references the Article that this comment belongs to.
     * Must be a valid ObjectId from the Article collection.
     */
    article: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
      required: [true, "Associated article is required."],
    },
    /**
     * User Reference: references the User who made the comment.
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

const Comment = mongoose.model("Comment", commentSchema);
module.exports = { Comment };
