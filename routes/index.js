var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Baisen - Lab4', message: 'This is my lab4.'});
});
router.get('/baisen', function (req, res, next) {
  res.render('baisen', {title: 'Baisen', message:'I am the only son in my family!'})
})
router.get('/mother', function (req, res, next) {
  res.render('mother', {title: 'Mother', message:'My mother is a beautiful woman!'})
})
router.get('/father', function (req, res, next) {
  res.render('father', {title: 'Father', message:'My father is a business man!'})
})
router.get('/brother', function (req, res, next) {
  res.render('brother', {title: 'Brother', message:'I do not have any brothers!'})
})
module.exports = router;
