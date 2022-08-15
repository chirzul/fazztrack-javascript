const express = require('express');
const router = express.Router();
const movies = require('./routes/movies');
const schedules = require('./routes/schedules');
const bookings = require('./routes/bookings');

router.use('/movies', movies);
router.use('/schedules', schedules);
router.use('/bookings', bookings);

module.exports = router;
