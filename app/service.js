exports = module.exports = function(ms) {
  // Load modules.
  var Server = require('../lib/server');
  
  console.log(process.env);
  
  
  var server = new Server(ms);
  return server;
}

exports['@singleton'] = true;
exports['@implements'] = 'http://schemas.modulate.io/js/social/ILinkbackService';
exports['@require'] = [
  'http://i.bixbyjs.org/ms'
];
