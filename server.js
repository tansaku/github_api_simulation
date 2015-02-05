var app = require('express')();
var server = require('http').createServer(app);
var port = 9999;

app.get('/', function(request, response){
  response.send('Github API Simulation');
});

server.listen(port, function(){
  console.log('server listening on port: ' + port);
});