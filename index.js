var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('test',function(msg){
      console.log('Mon test marche',msg);
  })
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
