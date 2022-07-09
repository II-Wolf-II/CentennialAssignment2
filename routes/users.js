var express = require('express');
var router = express.Router();
var usersController = require('../controllers/user');
var passport = require('passport');
// Routes for sign-up
router.get('/signup', usersController.renderSignup);
router.post('/signup', usersController.signup);

// Routes for sign-in
router.get('/signin', usersController.renderSignin);
router.post('/signin', usersController.signin);

// Route for sign-out
router.get('/signout', usersController.signout);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('services', { 
    title: 'Services',
    userName: 'Aaron'  });
});

module.exports = router;
