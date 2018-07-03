function Server(ms) {
  this._ms = ms;
}

Server.prototype.ping = function(source, target, cb) {
  console.log('Server#ping');
  console.log('  source: ' + source);
  console.log('  target: ' + target);
  
  cb();
}


module.exports = Server;
