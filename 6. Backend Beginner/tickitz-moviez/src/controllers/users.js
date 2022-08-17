const ctrl = {}
const model = require('../models/users')

ctrl.addUser = async (req, res) => {
  try {
    const { username, password, firstName, lastName, email, phone } = req.body
    const data = await model.addUser({
      username,
      password,
      firstName,
      lastName,
      email,
      phone
    })
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

ctrl.getAllUsers = async (req, res) => {
  try {
    const data = await model.getAllUsers()
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

ctrl.getUserById = async (req, res) => {
  try {
    const userId = req.params.id_user
    const data = await model.getUserById({ userId })
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

ctrl.updateUser = async (req, res) => {
  try {
    const userId = req.params.id_user
    const { username, password, firstName, lastName, email, phone } = req.body
    const data = await model.updateUser({
      username,
      password,
      firstName,
      lastName,
      email,
      phone,
      userId
    })
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

ctrl.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id_user
    const data = await model.deleteUser({ userId })
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = ctrl
