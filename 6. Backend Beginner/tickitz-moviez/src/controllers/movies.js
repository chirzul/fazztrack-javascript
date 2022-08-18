const ctrl = {}
const model = require('../models/movies')
const response = require('../helpers/response')

ctrl.addMovie = async (req, res) => {
  try {
    const data = await model.addMovie({ ...req.body, ...req.file })
    return response(res, 201, data)
  } catch (error) {
    return response(res, 500, 'Terjadi kesalahan', true)
  }
}

ctrl.getAllMovies = async (req, res) => {
  try {
    const data = await model.getAllMovies()
    return response(res, 200, data)
  } catch (error) {
    return response(res, 500, 'Terjadi kesalahan', true)
  }
}

ctrl.getSortedMovies = async (req, res) => {
  try {
    const data = await model.getSortedMovies()
    return response(res, 200, data)
  } catch (error) {
    return response(res, 500, 'Terjadi kesalahan', true)
  }
}

ctrl.getMovieById = async (req, res) => {
  try {
    const data = await model.getMovieById(req.params)
    return response(res, 200, data)
  } catch (error) {
    return response(res, 500, 'Terjadi kesalahan', true)
  }
}

ctrl.searchMovie = async (req, res) => {
  try {
    const data = await model.searchMovie(req.query)
    return response(res, 200, data)
  } catch (error) {
    return response(res, 500, 'Terjadi kesalahan', true)
  }
}

ctrl.updateMovie = async (req, res) => {
  try {
    const data = await model.updateMovie({
      ...req.params,
      ...req.body,
      ...req.file
    })
    return response(res, 200, data)
  } catch (error) {
    return response(res, 500, 'Terjadi kesalahan', true)
  }
}

ctrl.deleteMovie = async (req, res) => {
  try {
    const data = await model.deleteMovie(req.params)
    return response(res, 200, data)
  } catch (error) {
    return response(res, 500, 'Terjadi kesalahan', true)
  }
}

module.exports = ctrl
