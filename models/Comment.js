const mongoose = require("mongoose");

//Schema
const postSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    post: {
      type: mongoose.Types.ObjectId,
      ref: "Post",
    },
    body: {
      type: String,
      require: true,
      minlength: 1,
      maxlength: 280,
    },
    // tags: [
    //   {
    //     type: mongoose.Types.ObjectId,
    //     ref: "User",
    //   },
    // ],
    // likes: [
    //   {
    //     type: mongoose.Types.ObjectId,
    //     ref: "User",
    //   },
    // ],
    // comments: [
    //   {
    //     type: mongoose.Types.ObjectId,
    //     ref: "Comment",
    //   },
    // ],
  },
  { timestamps: true }
);

//model
module.exports = mongoose.model("Post", postSchema);