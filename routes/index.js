var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home',storedvalue: "storedvalue"});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home',storedvalue: "storedvalue"});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

/* GET Contact Us page. */
router.post('/contact', function(req, res, next) {
  console.log('Got body:', req.body);
  var storedvalue = req.body
  res.render('index', { title: 'Home',storedvalue: "storedvalue"});
  //res.sendStatus(200);
});
module.exports = router;
