const express = require('express');
const router = express.Router();

const Announcement = require('../../models/Announcement');

router.get('/test',(req, res) => {
    res.json({msg: 'User Works'})
});

router.get('/', (req, res) => {
    Announcement.find().sort({ date: -1}).then(announcement => res.json(announcement)).catch(err => res.status({msg: 'No Annoucement Yet'}));
});

router.post('/', (req, res) => {
    
    const newAnnouncement = new Announcement({
        subject: req.body.subject,
        description: req.body.description,
        date: req.body.date,
        submittedBy: req.body.submittedBy
    });

    newAnnouncement.save().then(announcement => res.json(announcement)).catch(err => console.log(err));
});

module.exports = router;