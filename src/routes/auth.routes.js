const express = require('express');
const router = express.Router();
const { signUp } = require('../controller/auth.controller');

router.post('/register', signUp);

module.exports.authRouter = router;
