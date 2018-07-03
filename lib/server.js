function Server(url, ms) {
  this._url = url;
  this._ms = ms;
}

Server.prototype.ping = function(source, target, cb) {
  console.log('Server#ping');
  console.log('  source: ' + source);
  console.log('  target: ' + target);
  
  var msg = {
    body: JSON.stringify({
      source: source,
      target: target
    })
  }
  
  
  console.log('publishing to: ' + this._url);
  
  this._ms.publish(this._url, msg, function(err) {
    if (err) {
      //logger.error('Failed to publish: ' + err.message);
      return cb(err);
    };
    
    cb();
  });
  
  
  //cb();
}


module.exports = Server;
