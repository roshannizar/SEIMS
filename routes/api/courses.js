const express = require('express');
const router = express.Router();

const validateCourseInput = require('../../validation/addcourse');

const Course = require('../../models/Course');

router.get('/test', (req, res) => res.json({ msg: 'Users works'}));

router.post('/courseadd', (req, res) => {

    const { errors, isValid } = validateCourseInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    Course.findOne({ cid: req.body.cid }).then(course => {
        
        if(course) {
            errors.cid = 'Course Id is already in use';
            return res.status(400).json(errors);
        } 
        else {
            const newCourse = new Course({
                cid: req.body.cid,
                cname: req.body.cname,
                cdescription: req.body.cdescription,
                ctype: req.body.ctype,
                cstatus: req.body.cstatus,
                cdate: req.body.cdate,
                cassignee: req.body.cassignee,
                cduration: req.body.cduration
            });

            newCourse.save().then(course => res.json(course)).catch(err => console.log(err));
        }
    });
});

module.exports = router;