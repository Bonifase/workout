const mongoose = require('mongoose');

const Workout = mongoose.Schema({
    title: {
        type: String, required: true
    },
    description: {
        type: String, required: true
    },
    category: {
        type: String
    }
})

module.exports = mongoose.model('Workout', Workout);