const mongoose = require('mongoose')

const TeacherSchema = new mongoose.Schema({
    Name:{
        type:String,
        require: true
    },
    Course:{
        type:String,
        required:true
    },
    Contact:{
        type:String,
        required:true
    }

});

const TeacherModel = mongoose.model('TeacherName',TeacherSchema)

module.exports = TeacherModel;