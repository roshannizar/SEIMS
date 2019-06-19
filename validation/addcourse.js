const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCourseInput(data) {
    let errors = {};

    data.cid = !isEmpty(data.cid) ? data.cid: '';
    data.cname = !isEmpty(data.cname) ? data.cname: '';
    data.ctype = !isEmpty(data.ctype) ? data.ctype: '';
    data.cdescription = !isEmpty(data.cdescription) ? data.cdescription: '';
    data.cstatus = !isEmpty(data.cstatus) ? data.cstatus: '';
    data.cdate = !isEmpty(data.cdate) ? data.cdate: '';
    data.cassignee = !isEmpty(data.cassignee) ? data.cassignee: '';

    if(!Validator.isAlphanumeric(data.cid)) {
        errors.cid = 'Course Id is invalid';
    }

    if(Validator.isEmpty(data.cid)) {
        errors.cid = 'Course Id is required';
    }

    if(Validator.isEmpty(data.cname)) {
        errors.cname = 'Course name is required';
    }

    if(Validator.isEmpty(data.ctype)) {
        errors.ctype = 'Course type is required';
    }

    if(Validator.isEmpty(data.cdescription)) {
        errors.cdescription = 'Course description is required';
    }

    if(Validator.isEmpty(data.cstatus)) {
        errors.cstatus = 'Course status is required';
    }

    if(Validator.isEmpty(data.cdate)) {
        errors.cdate = 'Course date is required';
    }

    if(Validator.isEmpty(data.cassignee)) {
        errors.cassignee = 'Course assignee is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};