const mongoose = require('mongoose')

const TeacherSchema = new mongoose.Schema({
    InstituteName:{
        type:String,
        required:true
    },
    InstituteLocation:{
        type:String,
        required:true
    },
    ShortName:{
        type:String,
        required:true    
    },
    contact:{
        type:String,
        required:true
    }

});

const TeacherModel = mongoose.model('TeacherName',TeacherSchema)

module.exports = TeacherModel;