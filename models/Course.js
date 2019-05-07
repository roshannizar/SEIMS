const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({

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
    },
    cdate: {
        type:Date
    },
    cassignee: {
        type: String,
        required: true
    }
});

module.exports = Course = mongoose.model('courses', CourseSchema)