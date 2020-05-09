const router = require('express').Router();
const { check } = require('express-validator');
const workout = require('../controllers/workout.controller')();

router.route('api/workouts').get(workout.getWorkouts);
router.route('api/workouts/add').post(
    [
        check('title').not().isEmpty().withMessage('title is required'),
        check('description').not().isEmpty().withMessage('description is required')
    ],
    workout.addWorkout
)

module.exports = router;