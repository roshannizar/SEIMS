const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateSignUpInput(data) {
    let errors = {};

    data.fname = !isEmpty(data.fname) ? data.fname: '';
    data.lname = !isEmpty(data.lname) ? data.lname: '';
    data.email = !isEmpty(data.email) ? data.email: '';
    data.password = !isEmpty(data.password) ? data.password: '';
    data.password2 = !isEmpty(data.password2) ? data.password2: '';
    data.type = !isEmpty(data.type) ? data.type: '';

    if(!Validator.isLength(data.fname, {min:2, max:30})) {
        errors.fname = 'First Name must be between 2 and 30 characters';
    }

    if(Validator.isEmpty(data.fname)) {
        errors.fname = 'First Name is required';
    }

    if(!Validator.isLength(data.lname, {min:2, max:30})) {
        errors.lname = 'Last Name must be between 2 and 30 characters';
    }

    if(Validator.isEmpty(data.lname)) {
        errors.lname = 'Last Name is required';
    }

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Invalid E-Mail';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'EMail is required';
    }

    if(!Validator.isLength(data.password, {min:6, max:30})) {
        errors.password = 'Password must be contain atleast 6 characters';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    if(Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm Password field is required';
    }

    if(!Validator.equals(data.password,data.password2)) {
        errors.password2 = 'Password didn\'t match';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};