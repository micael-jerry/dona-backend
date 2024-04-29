const express = require('express');
const router = express.Router();
const { signUp, login } = require('../controller/auth.controller');
const { signUpBodyValidator, loginBodyValidator } = require('../middleware/validator/auth.validator');

router.post('/register', signUpBodyValidator, signUp);
router.post('/login', loginBodyValidator, login);

module.exports.authRouter = router;
