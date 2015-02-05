var chai = require('chai');
var expect = chai.expect;

var host = 'http://localhost:9999';

describe('Github API Simulation', function(){
  before(function(){
    casper.start(host);
  });

  it('should return user data in json format', function(){
    casper.then(function(response){
      //expect(response.headers.get('Content-Type')).to.equal('text/html; charset=utf-8');    
      expect('body').to.have.text('Github API Simulation');
    });
  });

  it('should return JSON for a particular user', function(){
    casper.thenOpen(host + '/users/tansaku', function(response){
      expect(response.headers.get('Access-Control-Allow-Origin')).to.equal('*');
      expect('body').to.have.text('{"login":"tansaku", "followers":"12"}');
    });
  });

  it('should return JSON for a another user', function(){
    casper.thenOpen(host + '/users/henrygarner', function(response){
      expect(response.headers.get('Access-Control-Allow-Origin')).to.equal('*');
      expect('body').to.have.text('{"login":"henrygarner", "followers":"15"}');
    });
  });

});