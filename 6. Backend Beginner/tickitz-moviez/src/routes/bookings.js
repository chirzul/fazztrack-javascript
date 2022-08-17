const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/bookings')

router.get('/:booking_id', ctrl.getBookingById)
router.get('/', ctrl.getAllBookings)
router.post('/', ctrl.addBooking)
router.put('/:booking_id', ctrl.updateBooking)
router.delete('/:booking_id', ctrl.deleteBooking)

module.exports = router
