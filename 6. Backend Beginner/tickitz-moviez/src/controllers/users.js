const ctrl = {}
const model = require('../models/users')
const hash = require('../helpers/hash')
const response = require('../helpers/response')

ctrl.addUser = async (req, res) => {
  try {
    const hashPassword = await hash(req.body.password)
    const data = await model.addUser({ ...req.body, hashPassword })
    return response(res, 201, data)
  } catch (error) {
    return response(res, 500, 'Terjadi kesalahan', true)
  }
}

ctrl.getAllUsers = async (req, res) => {
  try {
    const data = await model.getAllUsers()
    return response(res, 200, data)
  } catch (error) {
    return response(res, 500, 'Terjadi kesalahan', true)
  }
}

ctrl.getUserById = async (req, res) => {
  try {
    const data = await model.getUserById(req.params)
    return response(res, 200, data)
  } catch (error) {
    return response(res, 500, 'Terjadi kesalahan', true)
  }
}

ctrl.updateUser = async (req, res) => {
  try {
    const hashPassword = await hash(req.body.password)
    const data = await model.updateUser({
      ...req.params,
      ...req.body,
      hashPassword
    })
    return response(res, 200, data)
  } catch (error) {
    return response(res, 500, 'Terjadi kesalahan', true)
  }
}

ctrl.deleteUser = async (req, res) => {
  try {
    const data = await model.deleteUser(req.params)
    return response(res, 200, data)
  } catch (error) {
    return response(res, 500, 'Terjadi kesalahan', true)
  }
}

module.exports = ctrl
