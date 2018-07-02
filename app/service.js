exports = module.exports = function() {
  // Load modules.
  var Server = require('../lib/server');
  
  
  var server = new Server();
  return server;
}

exports['@singleton'] = true;
exports['@implements'] = 'http://schemas.modulate.io/js/social/ILinkbackService';
exports['@require'] = [
];
