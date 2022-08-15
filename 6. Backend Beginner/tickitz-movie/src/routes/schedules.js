const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/schedules');

router.get('/:id_schedule', ctrl.getSpecificSchedule);
router.get('/', ctrl.getAllSchedules);
router.post('/', ctrl.addSchedule);
router.put('/:id_schedule', ctrl.updateSchedule);
router.delete('/:id_schedule', ctrl.deleteSchedule);

module.exports = router;
