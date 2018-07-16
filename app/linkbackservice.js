exports = module.exports = function(ms) {
  // Load modules.
  var Service = require('../lib/mspubservice');
  
  
  var url = 'https://pubsub.googleapis.com/v1/projects/' + process.env.GOOGLE_CLOUD_PROJECT + '/topics/test-linkback';
  
  
  var server = new Service(url, ms);
  return server;
}

exports['@singleton'] = true;
exports['@implements'] = 'http://schemas.modulate.io/js/social/notifications/LinkbackService';
exports['@require'] = [
  'http://i.bixbyjs.org/ms'
];
