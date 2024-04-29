const express = require('express');
const {
	getAllUsers,
	getUserInfo,
	updateUser,
} = require('../controller/user.controller');
const { updateUserValidator } = require('../middleware/validator/user.validator');
const router = express.Router();

// User operation
router.get('/', getAllUsers);
router.get('/:id', getUserInfo);
router.put('/:id', updateUserValidator, updateUser);

module.exports.userRouter = router;
