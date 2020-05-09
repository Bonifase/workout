const Workout = require('../models/workout.model');
const validator = require('./utilities/validator')();

const workout = () => {
    return {
        getWorkouts: async (req, res) => {
            try {
                let workouts = await Workout.find();
                return res.status(200).json(workouts);
            } catch (err) {
                console.log(err);
                return res.status(500).json({
                    msg: 'Internal server erro!'
                })
            }
        },
        addWorkout: async (req, res) => {
            validator.validateUserData(req, res);

        }
    }  
};

module.exports = workout;
