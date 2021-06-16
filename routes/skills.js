var express = require('express');
var router = express.Router();
// Require the controller that exports skills functions
var skillsCtrl = require('../controllers/skills');
// All actual paths start with '/skills'
//GET /skills
router.get('/', skillsCtrl.index);
//GET /skills/:id
router.get('/:id', skillsCtrl.show);
router.get('/new', skillsCtrl.new);
router.get('', skillsCtrl.create);
router.get(':id', skillsCtrl.delete);

module.exports = router;