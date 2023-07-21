const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
  // destructure is_showing from req.query
  const { is_showing } = req.query;

  // if is_showing is true, call listShowingMovies() from movies.service.js
  if (is_showing === "true") {
    try {
      const data = await moviesService.listShowingMovies();
      res.json({ data });
    } catch (error) {
      next(error);
    }
    // else call list() function from movies.service.js
  } else {
    try {
      const data = await moviesService.listMovies();
      res.json({ data });
    } catch (error) {
      next(error);
    }
  }
}

async function read(req, res, next) {
  // destructure movieId from req.params
  const movieId = req.params.movieId;
  // call read() function from movies.service.js
  const data = await moviesService.read(movieId);

  // if data is undefined, call next() function with error object
  if (!data) {
    next({ status: 404, message: "Movie cannot be found." });
    // else call res.json() function with data object
  } else {
    res.json({ data });
  }
}

async function listTheaters(req, res, next) {
  // destructure movieId from req.params
  const movieId = req.params.movieId;
  // call listTheaters() function from movies.service.js
  const data = await moviesService.listShowingTheaters(movieId);
  // call res.json() function with data object
  res.json({ data });
}

async function listReviews(req, res, next) {
  // destructure movieId from req.params
  const movieId = req.params.movieId;
  // call listReviews() function from movies.service.js
  const data = await moviesService.listReviews(movieId);
  // call res.json() function with data object
  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: asyncErrorBoundary(read),
  listTheaters: asyncErrorBoundary(listTheaters),
  listReviews: asyncErrorBoundary(listReviews),
};
