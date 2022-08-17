const ctrl = {}
const model = require('../models/movies')

ctrl.addMovie = async (req, res) => {
  try {
    const data = await model.addMovie(req.body)
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

ctrl.getAllMovies = async (req, res) => {
  try {
    const data = await model.getAllMovies()
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

ctrl.getSortedMovies = async (req, res) => {
  try {
    const data = await model.getSortedMovies()
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

ctrl.getMovieById = async (req, res) => {
  try {
    const data = await model.getMovieById(req.params)
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

ctrl.searchMovie = async (req, res) => {
  try {
    const data = await model.searchMovie(req.query)
    res.status(200).send(data)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
}

ctrl.updateMovie = async (req, res) => {
  try {
    const data = await model.updateMovie([req.params, req.body])
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

ctrl.deleteMovie = async (req, res) => {
  try {
    const data = await model.deleteMovie(req.params)
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = ctrl
