/*serverdelen*/

var express = require('express');
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var pug = require("pug");
/*var routy = require('./routes.js');*/

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

/*app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});*/
app.get('/', function(req, res) {
    res.render('index.pug');
});

app.get('/resultat', function(req, res) {
    res.render('resultat.pug');
});

app.get('*', function(req, res) {
    res.render('404.pug');
});





io.on('connection', function(socket){
    console.log("A user connected");
    socket.on('disconnect', function(){
        console.log("Now disconnected.");
    });
    socket.on('rapport', function(msg){
    io.emit('rapport', msg);
  });
    
});
    /*io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});*/
/*io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});*/

 





http.listen(3000, () => {
	console.log("Nu lyssnar vi på 3000.");
});














