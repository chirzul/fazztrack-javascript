const ctrl = {}
const model = require('../models/bookings')

ctrl.addBooking = async (req, res) => {
  try {
    const { scheduleId, userId, seats } = req.body
    const data = await model.addBooking({
      scheduleId,
      userId,
      seats
    })
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

ctrl.getAllBookings = async (req, res) => {
  try {
    const data = await model.getAllBookings()
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

ctrl.getBookingById = async (req, res) => {
  try {
    const bookingId = req.params.id_booking
    const data = await model.getBookingById({ bookingId })
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

ctrl.updateBooking = async (req, res) => {
  try {
    const bookingId = req.params.id_booking
    const { scheduleId, userId, seats } = req.body
    const data = await model.updateBooking({
      scheduleId,
      userId,
      seats,
      bookingId
    })
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

ctrl.deleteBooking = async (req, res) => {
  try {
    const bookingId = req.params.id_booking
    const data = await model.deleteSchedule({ bookingId })
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = ctrl
