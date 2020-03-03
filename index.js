var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  // ******************* DEBUT TEST ICI *******************

  console.log('a user connected');
  socket.on('test',function(msg){
      console.log('Mon test marche',msg);
  })

  socket.on('complexeCallToBack',function(msg){
    // On reçoit le message et on le traite, ici on ajoute un truc au string
    msg += " LE BACK LA RECU ET LE RENVOIE"
    console.log("BACK : "+msg)
    socket.emit('frontReceiveMsg', msg)
  })

  // ******************* FIN TEST ICI *******************
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
