const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../../models/User');
const Student = require('../../models/Student');
const CourseRegister = require('../../models/CourseRegister');

router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    const studentField ={};
    studentField.user = req.user.id;

    Student.findOne({user: req.user.id}).then(student => {
        if(student) {
            Student.findOneAndUpdate({user: req.user.id},{$set: studentField},{new: true}).then(student => res.json(student));
        } else {
            new Student(studentField).save().then(student => res.json(student));
        }
    });
});

router.get('/', (req,res) => {
    Student.find().populate('user').then(student => {
        if(!student) {
            return res.status(404).json('No Profile Found');
        }
         res.json(student);
    }).catch(err => res.status(404).json({msg: 'No Profile Found'}));
});

router.get('/user/:user_id', (req, res) => {
    Student.findOne({user: req.params.user_id}).populate('user').then(student => {
        if(!student) {
            res.status(404).json('No Profile found for this user');
        }

        res.json(student);
    }).catch(err => res.status(404).json({msg: 'There is no profile for this user'}));
});

router.post('/course/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
     Student.findOne({ user: req.user.id }).then(student => {
        
        student.scourse.unshift({courseid: req.body.courseid});

        student.save().then(student => res.json(student));
     }).catch(err => res.status(404).json({msg: 'There is no course enrolled'}));
});

router.post('/acourse', (req, res) => {
    Student.findOne({ cid: req.body.cid}).then(acourse => {
        if(acourse) {
            return res.status(400).json('Course Already Regsitered');
        } else {
             const newCourseRegister = new CourseRegister({
                cid: req.body.cid,
                cname: req.body.cname,
                ctype: req.body.type,
                cdescription: req.body.cdescription,
                cstatus: req.body.cstatus
             });

             newCourseRegister.save().then(courseRegister => res.json(courseRegister)).catch(err => console.log(err));
        }
    });
});

module.exports = router;