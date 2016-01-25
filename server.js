
/**
 * Module dependencies
 */
'use strict';

var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('express-error-handler'),
  morgan = require('morgan'),
  // routes = require('./routes'),
  // api = require('./routes/api'),
  http = require('http'),
  path = require('path'),
  favicon = require('serve-favicon');

var app = module.exports = express();

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3003);
// app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app')));

app.engine('html', require('ejs').renderFile);
// app.use(favicon(__dirname + '/app/favicon.ico'));

var env = process.env.NODE_ENV || 'development';

// development only
if ('development' === app.get('env')) {
  // app.use(errorhandler());
  app.use(errorHandler());
}

// production only
if (env === 'production') {
  // TODO
}

/**
 * Routes
 */

// serve index and view partials
// app.get('/', routes.index);
// app.get('/partials/:name', routes.partials);

// JSON API
// app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
// app.get('*', routes.index);

/**
 * Start Server
 */
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
