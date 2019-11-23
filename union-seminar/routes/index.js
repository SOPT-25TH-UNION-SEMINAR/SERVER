var express = require('express');
var router = express.Router();

router.use('/home', require('./home'));

router.get('/', function (req, res) {
  res.send('not supported');
})

module.exports = router;
