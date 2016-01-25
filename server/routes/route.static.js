/*
*	@file routes.static
*	Routes for static.
*/
(function(){
	'use strict';

	var express = require('express'),
			router  = express.Router(),
			config  = require('../config'),
			path 	  = require('path');

  	var staticRoutes = [
	    '^\/css',
	    '^\/js',
	    '^\/modules',
	    '^\/vendor',
	    '^\/index\\.html',
	    '^\/templates',
		'^\/views',
	    '^\/images',
	    '^\/fonts'
	  ];

	// router.get('/', function (req, res) {
	// 	res.sendFile(path.join(__dirname, '../../client/build/'+ '/index.html'));	
	// });
	router.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, '../../app/'+ '/index.html'));	
	});

	// router.get('/gconfig.js', function (req, res) {
	// 	res.sendFile(path.join(__dirname, '../../client/build/'+ '/gconfig.js'));
	// });

  	router.route(new RegExp(staticRoutes.join('|'))).get(express.static(path.join(__dirname, '../../app/')));

	module.exports = router;

})();