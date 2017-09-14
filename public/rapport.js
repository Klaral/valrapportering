$(function () {
            let socket = io();
        
    $('form').submit(function(){
                
            var msg = {
                lokal: $("#m").val(),
                parti: $("#a").val(),
                antal: $("#b").val()
            }
             
            
            
            
             socket.emit('rapport', msg);
            /*socket.on('rapport', (msg) => {
                $('#client').append($('<li>').text(msg));
            })*/
        });
    });
