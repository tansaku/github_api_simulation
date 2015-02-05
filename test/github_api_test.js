var chai = require('chai');
var expect = chai.expect;

describe('Github API Simulation', function(){
  before(function(){
    casper.start('http://localhost:9999/');
  });

  it('should return user data in json format', function(){
    casper.then(function(){
      expect('body').to.have.text('Github API Simulation');
    });
  });
});