const ctrl = {}
const model = require('../models/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const response = require('../helpers/response')

const generateToken = (username) => {
  const payload = {
    user: username,
    role: 'user'
  }

  const token = jwt.sign(payload, process.env.JWT_KEYS, { expiresIn: '60m' })

  const result = {
    msg: 'token created',
    token
  }

  return result
}

ctrl.login = async (req, res) => {
  try {
    const { username, password } = req.body
    const passDb = await model.getUser(username)

    if (passDb.length === 0) {
      return response(res, 401, 'user tidak terdaftar', true)
    }

    const check = await bcrypt.compare(password, passDb[0].password)

    if (!check) {
      return response(res, 401, 'password salah', true)
    }

    const result = await generateToken(username)
    return response(res, 200, result)
  } catch (error) {
    console.log(error)
    return response(res, 500, 'Terjadi kesalahan', true)
  }
}

module.exports = ctrl
