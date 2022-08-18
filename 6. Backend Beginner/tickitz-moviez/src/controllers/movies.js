const ctrl = {}
const model = require('../models/movies')
const response = require('../helpers/response')
const cloudinary = require('../middlewares/cloudinary')

ctrl.addMovie = async (req, res) => {
  try {
    const upload = await cloudinary.uploader.upload(req.file.path, {
      folder: 'tickitz_movie',
      use_filename: true,
      unique_filename: false
    })
    const img = upload.secure_url
    const data = await model.addMovie({ ...req.body, img })
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
    const upload = await cloudinary.uploader.upload(req.file.path, {
      folder: 'tickitz_movie',
      use_filename: true,
      unique_filename: false
    })
    const img = upload.secure_url
    const data = await model.updateMovie({
      ...req.params,
      ...req.body,
      img
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
