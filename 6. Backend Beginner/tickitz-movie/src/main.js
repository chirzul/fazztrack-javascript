const express = require('express');
const router = express.Router();
const movies = require('./routes/movies');

router.use('/movies', movies);

module.exports = router;
