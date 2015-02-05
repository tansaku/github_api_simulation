var app = require('express')();
var server = require('http').createServer(app);
var port = 9999;

app.set('view engine', 'ejs');

app.get('/', function(request, response){
  response.send('Github API Simulation');
});

app.get('/user/:user', function(request, response){
  response.render(request.params.user);
});

server.listen(port, function(){
  console.log('server listening on port: ' + port);
});