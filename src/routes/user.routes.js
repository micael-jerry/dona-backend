const express = require('express');
const { getAllUsers, getUserInfo, updateUser } = require('../controller/user.controller');
const { updateUserValidator } = require('../middleware/validator/user.validator');
const { authentication } = require('../middleware/auth/authentication.middleware');
const { himself } = require('../middleware/auth/authorization.middleware');
const router = express.Router();

// User operation
router.get('/', getAllUsers);
router.get('/:user_id', authentication, himself, getUserInfo);
router.put('/:user_id', authentication, himself, updateUserValidator, updateUser);

module.exports.userRouter = router;
