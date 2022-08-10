const express = require('express');
const router = express.Router();
const Movie = require('../controllers/movieController');

router.get('/', Movie.getMovies);

module.exports = router;
