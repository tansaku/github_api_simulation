var app = require('express')();
var server = require('http').createServer(app);
var port = 9999;

server.listen(port, function(){
  console.log('server listening on port: ' + port);
});