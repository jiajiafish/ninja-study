var http = require('http')
var fs = require('fs')

var server = http.createServer(
    function (req, res) {
        console.log(req.url)
        res.writeHead(200, {
            'Content-Type': 'text/json'
        })
        var myObj = {
            name:'jiaxiaole',
            job:'ninja',
            age:29
        }
        res.end(JSON.stringify(myObj))
    }
);

server.listen(3000, '127.0.0.1')
console.log('listening to port 3000')