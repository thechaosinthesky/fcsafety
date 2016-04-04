var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Safety Reference Guide - City of Fort Collins', pageName:'guide' });
});

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Safety Reference Guide - City of Fort Collins', pageName:'about' });
});

module.exports = router;
