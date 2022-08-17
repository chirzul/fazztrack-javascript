const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/schedules')

router.get('/:schedule_id', ctrl.getScheduleById)
router.get('/', ctrl.getAllSchedules)
router.post('/', ctrl.addSchedule)
router.put('/:schedule_id', ctrl.updateSchedule)
router.delete('/:schedule_id', ctrl.deleteSchedule)

module.exports = router
