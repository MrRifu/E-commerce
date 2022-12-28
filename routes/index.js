var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/shop', function(req, res, next) {
  res.render('shop', { title: 'shop' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});
router.get('/header', function(req, res, next) {
  res.render('header');
});
router.get('/navbar', function(req, res, next) {
  res.render('navbar', { title: 'navbar' });
});
router.get('/navbar', function(req, res, next) {
  res.render('navbar', { title: 'navbar' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'register' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});


module.exports = router;
