const mongoose = require('mongoose');

const SubjectNote = new mongoose.Schema({
    SubjectNote:{
        type:String,
        require: true,
        minlength:1,
        maxlength:140
    },
})

module.exports = new mongoose.model('Subject',SubjectNote)