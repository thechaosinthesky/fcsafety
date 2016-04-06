var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')
var util = require('util')
var dataFile = './data/filestore.json'

/* GET home page. */
router.get('/', function(req, res, next) {
	jsonfile.readFile(dataFile, function(err, obj) {
		res.render('index', { title: 'Safety Reference Guide - City of Fort Collins', pageName:'guide', menuItems: obj["menu-items"] });
	});
});

router.get('/test', function(req, res, next) {
	jsonfile.readFile(dataFile, function(err, obj) {
		res.render('test', { title: 'Safety Reference Guide - City of Fort Collins', pageName:'guide', menuItems: obj["menu-items"] });
	});
});

router.get('/menu', function(req, res, next) {
	jsonfile.readFile(dataFile, function(err, obj) {
		var menuItems = obj["menu-items"]
		var menuItemsStr = JSON.stringify(obj["menu-items"]);
		res.render('menu-items', { title: 'Menu Builder', pageName:'menu-items', menuItems: menuItems, menuItemsStr: menuItemsStr });
	});
});

router.post('/menu', function(req, res, next) {
	var menuItemsStr = req.body["menu"];
	var menuItems = JSON.parse(menuItemsStr);
	jsonfile.writeFile(dataFile, {"menu-items": menuItems}, function (err, obj) {
		res.render('menu-items', { title: 'Menu Builder', pageName:'menu-items', menuItems: menuItems, menuItemsStr: menuItemsStr });
	})
});

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Safety Reference Guide - City of Fort Collins', pageName:'about' });
});

function getMenuItems(){
	jsonfile.readFile(dataFile, function(err, obj) {
		console.log(obj["menu-items"]);
		return obj["menu-items"];
	});
}

module.exports = router;
