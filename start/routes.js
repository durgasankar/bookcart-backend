
const express = require('express');
const users = require('../routes/users');
const error = require('../middlewares/error');
const router = express.Router();


module.exports = (app) => {
    console.log('connected to routes...');
    app.use(express.json());
    app.use('/api/users', users);
    app.use(error);
}