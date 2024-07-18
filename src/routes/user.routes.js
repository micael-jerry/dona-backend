const express = require('express');
const { getAllUsers, getUserById, updateUser } = require('../controller/user.controller');
const { authentication } = require('../middleware/auth/authentication.middleware');
const { himself } = require('../middleware/auth/authorization.middleware');
const { validateRequest } = require('../middleware/validator/request.body.validator');
const { updateUserSchemaValidator } = require('../controller/schema/user.schema');
const router = express.Router();

// User operation
router.get('/', authentication, getAllUsers);
router.get('/:user_id', authentication, getUserById);
router.put('/:user_id', authentication, himself, validateRequest(updateUserSchemaValidator), updateUser);

module.exports.userRouter = router;
