const express = require('express');
const router = express.Router();
const passport = require('passport');

const validateCourseInput = require('../../validation/addcourse');

const Course = require('../../models/Course');
const User = require('../../models/User');

router.get('/test', (req, res) => res.json({ msg: 'Users works' }));

router.get('/', (req, res) => {
    Course.find().sort({ date: -1 }).then(course => res.json(course)).catch(err => res.status({ msg: 'No Course Found' }));
});

router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {

    const { errors, isValid } = validateCourseInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    Course.findOne({ cid: req.body.cid }).then(course => {

        if (course) {
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
                cduration: req.body.cduration,
            });

            newCourse.save().then(course => res.json(course)).catch(err => console.log(err));
        }
    });
});

//@route POST api/post/remove/:id
//@desc Remove user from the course
//access Private

router.post('/remove/:id', (req, res) => {
    User.findOne({ user: req.user.id}).then(user => {
        Course.findById(req.params.id).then(course => {
            const removeIndex = course.user.map(item => item.user.toString()).indexOf(req.user.id);

            course.user.splice(removeIndex, 1);

            course.save().then(course => res.json(course));
        })
        .catch(err => res.status(404).json({msg: 'Not Found'}));
    });
});

// @route GET api/course/:id
// @desc GET course
// @access public

router.get('/:user', (req, res) => {
    Course.findById(req.params.user).then(course => res.json(course)).catch(err => res.status(404).json({ msg: 'No Course Found'}));
});

router.post('/course/:id', passport.authenticate('jwt', { session: false}), (req, res) => {
    User.findOne({ user: req.user.id}).then(user => {
        Course.findById(req.params.id).then(course => {
            course.users.unshift({user: req.user.id});
            course.save().then(course => res.json(course));
        }).catch(err => res.status(404).json({msg: 'Not Found'}));
    });
});


module.exports = router;