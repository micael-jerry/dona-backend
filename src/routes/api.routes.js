const express = require('express');
const { helloWorldRouter } = require('./hello.routes');
const { authRouter } = require('./auth.routes');
const { userRouter } = require('./user.routes');
const router = express.Router();

router.use('/helloworld', helloWorldRouter);
router.use('/auth', authRouter);
router.use('/users', userRouter);

module.exports.apiRouter = router;
