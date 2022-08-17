const express = require('express')
const router = express.Router()
const authCheck = require('../middlewares/authCheck')
const ctrl = require('../controllers/movies')
const upload = require('../middlewares/upload')

router.get('/search', ctrl.searchMovie)
router.get('/sorted', ctrl.getSortedMovies)
router.get('/:movie_id', ctrl.getMovieById)
router.get('/', ctrl.getAllMovies)
router.post('/', upload.single('img'), ctrl.addMovie)
router.put('/:movie_id', authCheck, ctrl.updateMovie)
router.delete('/:movie_id', authCheck, ctrl.deleteMovie)

module.exports = router
