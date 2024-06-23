const express = require('express');
const { getAllUsers, getUserById, updateUser } = require('../controller/user.controller');
const { updateUserValidator } = require('../middleware/validator/user.validator');
const { authentication } = require('../middleware/auth/authentication.middleware');
const { himself } = require('../middleware/auth/authorization.middleware');
const router = express.Router();

// User operation
router.get('/', authentication, getAllUsers);
router.get('/:user_id', authentication, getUserById);
router.put('/:user_id', authentication, himself, updateUserValidator, updateUser);

module.exports.userRouter = router;
