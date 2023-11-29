const express = require('express');
const { signUp } = require('../controller/auth.controller');
const routes = express.Router();

routes.post('/register', signUp);

module.exports.userRoutes = routes;
