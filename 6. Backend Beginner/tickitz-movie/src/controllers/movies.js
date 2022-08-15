const ctrl = {};
const model = require('../models/movies');

ctrl.addMovie = async (req, res) => {
  try {
    const {
      title,
      genres,
      releaseDate,
      duration,
      director,
      casts,
      synopsis,
      img,
    } = req.body;
    const data = await model.addMovie({
      title,
      genres,
      releaseDate,
      duration,
      director,
      casts,
      synopsis,
      img,
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

ctrl.getAllMovies = async (req, res) => {
  try {
    const data = await model.getAllMovies();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

ctrl.getMovieById = async (req, res) => {
  try {
    const id_movie = req.params.id_movie;
    const data = await model.getMovieById({ id_movie });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

ctrl.searchMovie = async (req, res) => {
  try {
    const title = req.query.title;
    const data = await model.searchMovie({ title });
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

ctrl.updateMovie = async (req, res) => {
  try {
    const id_movie = req.params.id_movie;
    const {
      title,
      genres,
      releaseDate,
      duration,
      director,
      casts,
      synopsis,
      img,
    } = req.body;
    const data = await model.updateMovie({
      title,
      genres,
      releaseDate,
      duration,
      director,
      casts,
      synopsis,
      img,
      id_movie,
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

ctrl.deleteMovie = async (req, res) => {
  try {
    const id_movie = req.params.id_movie;
    const data = await model.deleteMovie({ id_movie });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = ctrl;
