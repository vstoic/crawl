const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VoteSchema = new Schema(
  {
    voted: {
      type: Boolean,
      default: false,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    crawl_id: {
      type: Schema.Types.ObjectId,
      ref: "Crawl",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Vote = mongoose.model("Vote", VoteSchema);