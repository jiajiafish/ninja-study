var express = require('express')

var app = express()

app.set('view engine','ejs')

// app.use('/assets',function(req,res,next){
//     console.log(req.url)
// next()
// })

// 这里的assets是用来定义访问的链接的，asset是用来指定含有静态文件的文件夹
app.use('/assets',express.static('asset'))

app.get('/',function( req,res){
// res.send('this is the home page')
// res.sendFile(__dirname +'/index.html')
res.render('index')

})

app.get('/contact',function( req,res){
    console.log(req.query)
    res.render('contact')
    })

app.get('/profile/:id',(req,res)=>{
    // res.send("you requeset :"+req.params.id)
    // res.send(`you request {${req.params.id}}`)
    var data = {age:29,
    job:'nijia',
hobbies:['eating','fighting','fuck']}
    res.render('profile',{
        person:req.params.id,
        data:data
    })
})
app.listen(3000)