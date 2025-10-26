const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    genre: {
      type: String,
      required: [true, "Genre is required"],
    },
    director: {
      type: String,
      required: [true, "Director is required"],
    },
    release_year: {
      type: Number,
      required: [true, "Release year is required"],
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: [0, "Rating must be greater than 0"],
      max: [10, "Max rating is 10"],
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Movie", movieSchema);
