const express = require("express");
const router = express.Router();
const {
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
  createMovie,
} = require("../controller/movies");
const validateMovie = require("../middleware/validate");

// GET all movies
router.get("/", getAllMovies);

// GET single movie by id
router.get("/:id", getMovieById);

// CREATE new movie
router.post("/", validateMovie, createMovie);

// UPDATE movie by id
router.put("/:id", validateMovie, updateMovie);

// DELETE movie by id
router.delete("/:id", deleteMovie);

module.exports = router;
