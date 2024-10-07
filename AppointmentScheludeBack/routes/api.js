const router = require('express').Router();

// Users
router.use('/users', require('./api/users'));

module.exports = router;