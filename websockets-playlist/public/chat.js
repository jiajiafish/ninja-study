//make connection

var socket = io.connect('http://localhost:4000')

// querydom

var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    room = document.getElementById('room'),
    btn = document.getElementById('send'),
    output = document.getElementById('output');
    feedback = document.getElementById('feedback');


// emit 
btn.addEventListener('click',function () {
    socket.emit('chat',{
        message:message.value,
        handle:handle.value,
    });
})

message.addEventListener("keypress",function(){
    socket.emit('typing',handle.value)
})
// Listen for events
socket.on('chat',function(data){
    console.log(data)
    feedback.innerHTML=""
output.innerHTML +='<p><strong>'+data.content.handle+':</strong>'+data.content.message+'</p>'
})

socket.on('typing',function (data) {
    feedback.innerHTML="<p><em>" + data +"is typing a message...</em></p>"
})

