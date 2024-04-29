const express = require('express');
const {
	getAllUsers,
	getUserInfo,
	updateUser,
} = require('../controller/user.controller');
const router = express.Router();

// User operation
router.get('/', getAllUsers);
router.get('/:id', getUserInfo);
router.put('/:id', updateUser);

module.exports.userRouter = router;
