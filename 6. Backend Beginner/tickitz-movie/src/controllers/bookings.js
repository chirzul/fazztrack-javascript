const ctrl = {};
const model = require('../models/bookings');

ctrl.addBooking = async (req, res) => {
  try {
    const { id_schedule, id_user, seats } = req.body;
    const data = await model.addBooking({
      id_schedule,
      id_user,
      seats,
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

ctrl.getAllBookings = async (req, res) => {
  try {
    const data = await model.getAllBookings();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

ctrl.getBookingById = async (req, res) => {
  try {
    const id_booking = req.params.id_booking;
    const data = await model.getBookingById({ id_booking });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

ctrl.updateBooking = async (req, res) => {
  try {
    const id_booking = req.params.id_booking;
    const { id_schedule, id_user, seats } = req.body;
    const data = await model.updateBooking({
      id_schedule,
      id_user,
      seats,
      id_booking,
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

ctrl.deleteBooking = async (req, res) => {
  try {
    const id_booking = req.params.id_booking;
    const data = await model.deleteSchedule({ id_booking });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = ctrl;
