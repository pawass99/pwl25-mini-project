const validateMovie = (req, res, next) => {
  const { title, genre, director, release_year, rating } = req.body;
  const errors = [];

  if (!title || title.trim() === "") {
    errors.push("Title is required and cannot be empty");
  }
  if (!genre || genre.trim() === "") {
    errors.push("Genre is required and cannot be empty");
  }
  if (!director || director.trim() === "") {
    errors.push("Director is required and cannot be empty");
  }
  if (release_year === undefined || release_year === null) {
    errors.push("Release year is required");
  } else if (isNaN(release_year)) {
    errors.push("Release year must be a number");
  }
  if (rating === undefined || rating === null) {
    errors.push("Rating is required");
  } else if (isNaN(rating)) {
    errors.push("Rating must be a number");
  } else if (rating < 0 || rating > 10) {
    errors.push("Rating must be between 0 and 10");
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errors,
    });
  }

  next();
};

module.exports = validateMovie;
