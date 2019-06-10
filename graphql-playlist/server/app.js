const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require("./schema/schema")
const cors = require('cors')
const app = express();
app.use(cors())
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://jiaxiaole:YEw_ZajZZwyg5aM@cluster0-klii5.mongodb.net/test")
mongoose.connection.once('open',()=>{
    console.log('connneted to db')
})

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    // pass in a schema property
    schema,
    graphiql:true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
