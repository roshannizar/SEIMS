const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const User = require('../../models/User');
const bcrpyt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateSignUpInput = require('../../validation/signup');
const validateSignInInput = require('../../validation/login');

router.get('/test', (req, res) => res.json({ msg: 'Working!' }));


//@route POST api/user/signup
//@desc Signup user to the system
//@access public

router.post('/signup', (req, res) => {
    
    const { errors, isValid } = validateSignUpInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            errors.email = 'Email Already exists';
            return res.status(400).json(errors);
        }
        else {
            const avatar = gravatar.url(req.body.email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            });

            const newUser = new User({
                fname: req.body.fname,
                lname: req.body.lname,
                email: req.body.email,
                avatar,
                roletype: req.body.roletype,
                password: req.body.password,
                contactno: req.body.contactno
            });

            bcrpyt.genSalt(10, (err, salt) => {
                bcrpyt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save().then(user => res.json(user)).catch(err => console.log(err));
                });
            });
        }
    });
});

// @route GET api/user/signin
// @desc Entering credentials to login to the system
// @access Public

router.post('/signin', (req,res) => {
    const { errors, isValid } = validateSignInInput(req.body);

    if(!isValid) {
        return res.status(400).json(errros);
    }
    
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if(!user) {
            errors.email = 'Invalid Credentials';
            return res.status(400).json(errros);
        }

        bcrpyt.compare(password, User.password).then(isMatch => {
            if(isMatch) {
                const payload = { id: user.id, fname: user.fname, lname: user.lname, avatar:user.avatar };

                jwt.sign(
                    payload,keys.secretOrKey, {expiresIn: 3600},(err, token) => {
                        res.json({
                            success: true,
                            token: 'Bearer '+token
                        });
                    }
                )
            } else {
                errors.password = 'Invalid Credentials';
                return res.status(400).json(errors);
            }
        });
    });
});


module.exports = router;