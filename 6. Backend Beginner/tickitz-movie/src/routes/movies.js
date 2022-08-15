const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/movies');

router.get('/search', ctrl.searchMovie);
router.get('/:id_movie', ctrl.getMovieById);
router.get('/', ctrl.getAllMovies);
router.post('/', ctrl.addMovie);
router.put('/:id_movie', ctrl.updateMovie);
router.delete('/:id_movie', ctrl.deleteMovie);

module.exports = router;
