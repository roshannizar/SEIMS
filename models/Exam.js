const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExamSchema = new Schema({

    examid: {
        type: String,
        required: true
    },
    examstatus: {
        type: String,
        required: true
    },
    examdate: {
        type: String,
        required: true
    },
    
});

module.exports = Exam = mongoose.model('exams', ExamSchema);