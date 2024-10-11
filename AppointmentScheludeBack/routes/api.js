const router = require('express').Router();

// Users
router.use('/users', require('./api/users'));

// Timeslots
router.use('/timeslots', require('./api/timeslots'));

module.exports = router;