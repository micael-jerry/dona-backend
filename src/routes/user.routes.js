const express = require('express');
const { signUp } = require('../controller/auth.controller');
const {
	getAllUsers,
	getUserInfo,
	updateUser,
} = require('../controller/user.controller');
const routes = express.Router();

// Auth
routes.post('/register', signUp);

// User operation
routes.get('/', getAllUsers);
routes.get('/:id', getUserInfo);
routes.put('/:id', updateUser);

module.exports.userRoutes = routes;
