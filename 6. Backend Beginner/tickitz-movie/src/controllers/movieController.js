const Movie = {};

Movie.getMovies = (req, res) => {
  res.send('Hello from movies');
};

module.exports = Movie;
