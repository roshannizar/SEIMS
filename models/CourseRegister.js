const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseRegisterSchema = new Schema({

    cid: {
        type:String,
        required:true
    },
    cname: {
        type:String,
        required:true
    },
    ctype: {
        type:String,
        required:true
    },
    cdescription: {
        type:String,
        required: true
    },
    cstatus: {
        type:String,
        required:true
    }
});

module.exports = CourseRegister = mongoose.model('courser', CourseRegisterSchema);