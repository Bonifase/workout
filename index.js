/* eslint-disable no-undef */
const express = require('express');
const path = require('path');
require('dotenv').config();
const userRoutes = require('./src/routes/user.routes');
require('./src/models/db');
const workoutRoutes = require('./src/routes/workout.routes');

const app = express()
app.use(express.json());


app.set('views', path.join(__dirname, 'views'));

// set static folder
app.use(express.static(path.join(__dirname, 'front-end')));

app.use(userRoutes);
app.use(workoutRoutes);

app.listen(5000, () => console.log('server running on port 5000'))