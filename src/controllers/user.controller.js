/* eslint-disable no-undef */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const validator = require('./utilities/validator')();


const user = () => {
    return {
        getUsers: async (req, res) => {
            try {
                const users = await User.find();
                return res.status(200).json(users);
            } catch (err) {
                return res.status(500).json(err);
            }
        },
        registerUser: async (req, res) => {
            validator.validateUserData(req, res);
            try {
                let user = await User.findOne({
                    email: req.body.email
                });
                if (user) {
                    res.status(409).json({
                        msg: 'User with that email already exist'
                    });
                    return;
                }
            } catch (err) {
                console.log(err);
            }
            let newUser = new User(req.body);
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(
                    newUser.password,
                    salt,
                    async (err, hash) => {
                        if (err) console.log(err);
                        newUser.password = hash
                        try {
                            let result = await newUser.save();
                            return res.status(200).json(result);
                        } catch (err) {
                            console.log(err);
                        }
                    }
                )
            })
        },
        loginUser: async (req, res) => {
            try {
                const user = await User.findOne({
                    email: req.body.email
                });
                if (!user) {
                    return res.status(401).json(
                        {
                            msg: 'Invalid login credentials!'
                        }
                    )
                }
                bcrypt.compare(
                    req.body.password,
                    user.password,
                    (err, isMatch) => {
                        if (err) {
                            return res.status(500).json(
                                { msg: 'Internal Server error' }
                            )
                        }
                        if (isMatch) {
                            const token = jwt.sign({
                                email: user.email,
                                user_id: user._id,
                            }, process.env.SECRET_KEY, {
                                expiresIn: '1hr'
                            });
                            return res.status(200).json({
                                msg: 'login successful',
                                user: user.username,
                                token: token
                            })
                        } else {
                            return res.status(401).json(
                                { msg: 'Invalid login credentials!' }
                            );
                        }
                    }
                )
            } catch (err) {
                return res.json(err)
            }
        }
    }
};

module.exports = user;
