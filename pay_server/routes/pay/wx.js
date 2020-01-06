var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function (req, res, next) {
  res.json({
    code: 0,
    data: 'test',
    message: 'test'
  })
});

module.exports = router;