const express = require('express');
const { signUp } = require('../controller/auth.controller');
const { getAllUsers } = require('../controller/user.controller');
const routes = express.Router();

// Auth
routes.post('/register', signUp);

// User operation
routes.get('/', getAllUsers);

module.exports.userRoutes = routes;
