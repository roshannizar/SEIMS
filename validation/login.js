const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateSignInInput(data) {
    let errors = {};


    data.email = !isEmpty(data.email) ? data.email: '';
    data.password = !isEmpty(data.password) ? data.password: '';

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Enter valid credentials';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Enter valid credentials';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};