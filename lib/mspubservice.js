function MSPublisherLinkbackService(url, ms) {
  this._url = url;
  this._ms = ms;
}

MSPublisherLinkbackService.prototype.ping = function(source, target, cb) {
  var msg = {
    body: JSON.stringify({
      source: source,
      target: target
    })
  };
  
  this._ms.publish(this._url, msg, function(err) {
    if (err) {
      return cb(err);
    }
    
    cb();
  });
}


module.exports = MSPublisherLinkbackService;
