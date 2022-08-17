const ctrl = {}
const model = require('../models/schedules')

ctrl.addSchedule = async (req, res) => {
  try {
    const data = await model.addSchedule(req.body)
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

ctrl.getAllSchedules = async (req, res) => {
  try {
    const data = await model.getAllSchedules()
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

ctrl.getScheduleById = async (req, res) => {
  try {
    const data = await model.getScheduleById(req.params)
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

ctrl.updateSchedule = async (req, res) => {
  try {
    const data = await model.updateSchedule([req.params, req.body])
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

ctrl.deleteSchedule = async (req, res) => {
  try {
    const data = await model.deleteSchedule(req.params)
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = ctrl
