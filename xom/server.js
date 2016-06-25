exports = module.exports = function() {
  // Load modules.
  var Server = require('../lib/server');
  
  
  var server = new Server();
  return server;
}

exports['@singleton'] = true;
exports['@implements'] = 'http://schemas.jaredhanson.me/js/social/linkback/Server';
exports['@require'] = [
];
