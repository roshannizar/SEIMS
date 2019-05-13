const mongoose = required('mongoose');
const Schema = mongoose.Schema;

const GradeSchema = new Schema ({

    courseid: {
        type: String,
        required: true
    },
    studentid: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    }
});

module.exports = Grade = mongoose.model('grades', GradeSchema);