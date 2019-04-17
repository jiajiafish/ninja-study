var express = require("express");
var socket = require("socket.io")
//app settup

var app =express();
var server =app.listen(4000,function () {
    console.log('listening to request on 4000')
})

//static files
app.use(express.static('public'));

var io =socket(server);
io.on('connection',function(socket){
    console.log('make socket connection',socket.id)
    socket.on('chat',function (data) {
        outData ={'type': 'Reply',
        'content': data.content,
        "avatar": data.avatar,
        "created_at": "刚刚                           "
        }
        console.log(outData)
        io.sockets.in(data.note_id).emit('chat',outData)
    })
    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data)
    })
    socket.on('join',(data)=>{
        console.log('加入房间ok'+data)
        socket.join(data)
        io.sockets.in(data).emit('system','hello,'+data+'加入了房间');
        // socket.in(data).broadcast('')
        console.log(socket.rooms)
        console.log(io.sockets)
    })
    socket.on('leave',(data)=>{
        console.log('离开房间'+data)
        socket.leave(data)
        io.sockets.in(data).emit('system','hello,'+data+'离开了房间');
    })
})
