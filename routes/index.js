var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    userName: 'Aaron'  });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { 
    title: 'About', 
    userName: 'Aaron' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { 
    title: 'Projects',
    userName: 'Aaron' });
});

module.exports = router;
