const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
    
    assignmentid: {
        type: String,
        required: true
    },
    assignmentdeadline: {
        type: String,
        required: true
    },
    assignmentdate: {
        type: String,
        required: true
    },
    assignmentstatus: {
        type: String,
        required: true
    }
});

module.exports = Assignment = mongoose.model('assignments', AssignmentSchema);