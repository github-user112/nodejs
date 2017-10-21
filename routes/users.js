var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/index', function(req, res, next) {
  res.send('post,dddd,dddd');
});

module.exports = router;
