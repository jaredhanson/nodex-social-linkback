/* global describe, it, expect */

var expect = require('chai').expect;
var factory = require('../app/linkbackservice');


describe('service', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://schemas.modulate.io/js/social/ILinkbackService');
    expect(factory['@singleton']).to.equal(true);
  });
  
});
