var events = require('events')
var util = require('util')
var fs = require('fs')
// var myEmitter =  new events.EventEmitter();
// myEmitter.on('someevent',function (msg) {
//     console.log(msg)
// })
// myEmitter.emit('someevent',"the event was emit",'jiaxiaole')

var Person = function (name) {
    this.name = name

}
util.inherits(Person, events.EventEmitter)
var james = new Person("james")
var mary = new Person("mary")
var ryu = new Person("ryu")

var people = [james,mary,ryu]
people.forEach(function (person) {
    person.on('speak',function (msg) {
        console.log(person.name+' said:'+msg)
    })
})
james.emit("speak",'hi jiaxiaole')
fs.readFile(__dirname + '/app.js', 'utf8',function (error,data) {
    fs.writeFileSync('writeMe.txt',data)
})

console.log('test') 
// fs.writeFileSync('writeMe.txt',readMe)