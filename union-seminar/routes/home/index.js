var express = require('express');
var router = express.Router();

router.use('/foru', require('./foru'));
router.use('/library', require('./library'));

router.use('/foru', require('./foru'));

module.exports = router;
