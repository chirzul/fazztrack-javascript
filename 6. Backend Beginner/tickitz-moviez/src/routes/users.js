const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/users')

router.get('/:user_id', ctrl.getUserById)
router.get('/', ctrl.getAllUsers)
router.post('/', ctrl.addUser)
router.put('/:user_id', ctrl.updateUser)
router.delete('/:user_id', ctrl.deleteUser)

module.exports = router
