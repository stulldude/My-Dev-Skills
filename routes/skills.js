var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('views/skills/index');
});

module.exports = router;
