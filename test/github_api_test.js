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
      expect(response.headers.get('Content-Type')).to.equal('application/json; charset=utf-8');
      expect('body').to.have.text('{"login":"tansaku", "html_url":"147", "public_repos":"216", "public_followers":"147", "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3"}');
    });
  });

  it('should return JSON for a another user', function(){
    casper.thenOpen(host + '/users/henrygarner', function(response){
      expect(response.headers.get('Access-Control-Allow-Origin')).to.equal('*');
      expect(response.headers.get('Content-Type')).to.equal('application/json; charset=utf-8');
      expect('body').to.have.text('{"login":"henrygarner", "html_url":"24", "public_repos":"77", "public_followers":"24", "avatar_url": "https://avatars.githubusercontent.com/u/24540?v=3"}');
    });
  });

});