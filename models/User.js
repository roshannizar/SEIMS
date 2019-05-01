const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    sid: {
        type: String
    },
    fname: {
        type: String,
        required:true
    },
    lname: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    status: {
        type:String
    },
    contactno: {
        type: Number
    },
    roletype: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = User = mongoose.model('users', UserSchema);