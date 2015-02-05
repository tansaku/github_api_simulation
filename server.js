var app = require('express')();
var server = require('http').createServer(app);
var port = 9999;

app.get('/', function(request, response){
  response.send('Github API Simulation');
});

app.get('/user/:user', function(request, response){
  response.json({login: request.params.user});
});

server.listen(port, function(){
  console.log('server listening on port: ' + port);
});