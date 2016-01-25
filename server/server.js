// the below file can be broken down into multiple files if it grows
(function(){
  'use strict';

  var app = require('./app'),
    config = require('./config');
    // routes = require('./routes'),
    // api = require('./routes/api'),

  app.listen(config.port, function () {
    console.log('Server started in ', config.env, ' mode, at port ', config.port);
  });

  // app.set('views', __dirname + '/views');
  // app.set('view engine', 'jade');
  // app.use(express.static(path.join(__dirname, 'public')));
  // app.use(favicon(__dirname + '/app/favicon.ico'));

  // serve index and view partials
  // app.get('/', routes.index);
  // app.get('/partials/:name', routes.partials);

  // JSON API
  // app.get('/api/name', api.name);

  // redirect all others to the index (HTML5 history)
  // app.get('*', routes.index);

})();
