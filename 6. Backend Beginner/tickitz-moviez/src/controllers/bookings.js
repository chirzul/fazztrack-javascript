const ctrl = {}
const model = require('../models/bookings')

ctrl.addBooking = async (req, res) => {
  try {
    const data = await model.addBooking(req.body)
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
    const data = await model.getBookingById(req.params)
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

ctrl.updateBooking = async (req, res) => {
  try {
    const data = await model.updateBooking([req.params, req.body])
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

ctrl.deleteBooking = async (req, res) => {
  try {
    const data = await model.deleteSchedule(req.params)
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = ctrl
