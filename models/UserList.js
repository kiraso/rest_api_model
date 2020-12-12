const mongoose = require('mongoose');
const SubjectNote = require('./SubjectNote')
const express = require('express');


const UserList = new mongoose.Schema({
    First_name:String,
    Last_name:String,
    username:String,
    password:Number
})

module.exports = new mongoose.model('Userlist',UserList)