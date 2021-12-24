
var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

router.get('/home', ProjectController.home);
router.get('/test', ProjectController.test);
router.post('/saveProject', ProjectController.saveProject);
router.get('/getProject/:id?',ProjectController.getProject);
router.get('/getProjectAll', ProjectController.getProjectAll);
router.put('/upProject/:id', ProjectController.upProject);
router.delete('/deleteProject/:id', ProjectController.deleteProject);

module.exports = router;
