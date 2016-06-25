exports = module.exports = function social_linkback(id) {
  var map = {
    'server': './xom/server'
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};

exports.used = function(container) {
  container.add('server');
};
