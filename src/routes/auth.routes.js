const express = require('express');
const router = express.Router();
const { signUp, login, whoami } = require('../controller/auth.controller');
const { authentication } = require('../middleware/auth/authentication.middleware');
const { validateRequest } = require('../middleware/validator/request.body.validator');
const { signUpValidatorSchema, loginValidatorSchema } = require('../controller/schema/auth.schema');

router.post('/register', validateRequest(signUpValidatorSchema), signUp);
router.post('/login', validateRequest(loginValidatorSchema), login);
router.get('/whoami', authentication, whoami);

module.exports.authRouter = router;
