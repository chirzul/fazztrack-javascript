const ctrl = {};
const model = require('../models/schedules');

ctrl.addSchedule = async (req, res) => {
  try {
    const { id_movie, showDate, city, theater, address, showTime, price } =
      req.body;
    const data = await model.addSchedule({
      id_movie,
      showDate,
      city,
      theater,
      address,
      showTime,
      price,
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

ctrl.getAllSchedules = async (req, res) => {
  try {
    const data = await model.getAllSchedules();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

ctrl.getSpecificSchedule = async (req, res) => {
  try {
    const id_schedule = req.params.id_schedule;
    const data = await model.getSpecificSchedule({ id_schedule });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

ctrl.updateSchedule = async (req, res) => {
  try {
    const id_schedule = req.params.id_schedule;
    const { id_movie, showDate, city, theater, address, showTime, price } =
      req.body;
    const data = await model.updateSchedule({
      id_movie,
      showDate,
      city,
      theater,
      address,
      showTime,
      price,
      id_schedule,
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

ctrl.deleteSchedule = async (req, res) => {
  try {
    const id_schedule = req.params.id_schedule;
    const data = await model.deleteSchedule({ id_schedule });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = ctrl;
