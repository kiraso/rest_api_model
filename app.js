const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();// const PORT = process.env || 3000
const UserListRoute = require('./routes/UserList')


app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use('/user',UserListRoute);

try {
    mongoose.connect( process.env.MONGO_URL, {
        dbName:'rest_api',
        user:'Annie',
        pass: 'ZUK1Ks3I3WD7Q2Sy',
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }, () =>
    console.log("connected mongoDB"));    
    console.log("now on port http://localhost:3000" )
}catch (error) { 
    console.log("could not connect");    
}

app.get('/user', (req, res) => {
    res.send()
  })

app.listen(3000)