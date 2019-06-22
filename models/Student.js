const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    scourse: [
        {
            courseid: {
                type: Schema.Types.ObjectId,
                ref: 'courses'
            }
        }
    ]
});

module.exports = Student = mongoose.model('student', StudentSchema);