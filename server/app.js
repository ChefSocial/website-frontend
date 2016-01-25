(function() {
	'use strict';

	var express = require('express'),
		app = express(),
		morgan = require('morgan'),
		bodyParser = require('body-parser'),
		errorHandler = require('express-error-handler'),
		config 	= require('./config'),
		env = config.env,
		methodOverride = require('method-override'),
		path = require('path'),
		favicon = require('serve-favicon');

	app.use(
		bodyParser.json(),
		morgan('dev'),
		methodOverride(),
		express.static(path.join(__dirname, '../app'))
	);

	// any routes mentioned in route.static will be relative to '/'
	app.use(
		'/',
		require('./routes/route.static')
	);

	app.engine('html', require('ejs').renderFile);

	// development only
	if ('development' === env) {
	  app.use(errorHandler());
	}

	// production only
	if (env === 'production') {
	  // TODO
	}

	module.exports = app;

})();