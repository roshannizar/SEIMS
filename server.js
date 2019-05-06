const express = require('express');
const mongoose = require('mongoose');
const bodypParser = require('body-parser');

const users = require('./routes/api/user');

const app = express();

app.use(bodypParser.urlencoded({extended: false}));
app.use(bodypParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db, {
    useNewUrlParser: true
}).then(()=>console.log('MongoDB Connected')).catch(err => console.log(err));

app.use('/api/user', users);

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Server running on port ${port}`));