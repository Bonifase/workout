/* eslint-disable no-undef */
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {  useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) {
        console.log('Database connection successfully established!');
    } else {
        console.log(err);
    }
});

