/* eslint-disable no-undef */
const router = require('express').Router();
const { check } = require('express-validator');
const user = require('../controllers/user.controller')();


router.route('/api/user/signup').post(
    [
        check('username').not().isEmpty().withMessage('Name is required'),
        check('email', 'Email is not valid').isEmail(),
        check('password', 'Password is requried')
            .isLength({ min: 1 })
            .custom((val, { req }) => {
                if (val !== req.body.confirm_password) {
                    throw new Error("Passwords don't match");
                } else {
                    return val;
                }
            }),
    ],
    user.registerUser
);
router.route('/api/user/login').post(
    [
        check('email', 'Email is not valid').isEmail(),
        check('password', 'Password is requried').isLength({ min: 1 })
    ],
    user.loginUser
);
router.route('/api/users').get(user.getUsers);


module.exports = router;
