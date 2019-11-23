var express = require('express');
var router = express.Router();

router.use('/foru', require('./foru'));
router.use('/library', require('./library'));

module.exports = router;
