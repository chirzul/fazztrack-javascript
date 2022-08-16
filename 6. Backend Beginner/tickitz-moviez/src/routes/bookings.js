const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/bookings')

router.get('/:id_booking', ctrl.getBookingById)
router.get('/', ctrl.getAllBookings)
router.post('/', ctrl.addBooking)
router.put('/:id_booking', ctrl.updateBooking)
router.delete('/:id_booking', ctrl.deleteBooking)

module.exports = router
