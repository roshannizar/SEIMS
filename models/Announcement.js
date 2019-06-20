const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnnouncementSchema = new Schema({

    subject: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required:true
    },
    date: {
        type:Date,
        default:Date.now
    },
    submittedBy: {
        type:String,
        required:true
    }
});

module.exports = Announcement = mongoose.model('announcment', AnnouncementSchema);