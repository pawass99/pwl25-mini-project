const express = require("express");
const connectDB = require("./config/database");
const errorHandler = require("./middleware/errorHandler");
const logRequest = require("./middleware/logs");

// Load env vars
require("dotenv").config();

// Connect to database
connectDB();

// Initialize express app
const app = express();

// Middleware
app.use(express.json()); // Body parser
app.use(logRequest); // Logger middleware

// Routes
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Movies REST API",
    endpoints: {
      getAllMovies: "GET /api/movies",
      getMovieById: "GET /api/movies/:id",
      createMovie: "POST /api/movies",
      updateMovie: "PUT /api/movies/:id",
      deleteMovie: "DELETE /api/movies/:id",
    },
  });
});

app.use("/api/movies", require("./routes/movies"));

// Error Handler (must be last)
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    ` Server running on port ${PORT} in ${process.env.NODE_ENV} mode`
  );
});
