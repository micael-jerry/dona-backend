const express = require('express');
const router = express.Router();
const { signUp, login, whoami } = require('../controller/auth.controller');
const { signUpBodyValidator, loginBodyValidator } = require('../middleware/validator/auth.validator');
const { authentication } = require('../middleware/auth/authentication.middleware');

router.post('/register', signUpBodyValidator, signUp);
router.post('/login', loginBodyValidator, login);
router.get('/whoami', authentication, whoami);

module.exports.authRouter = router;
