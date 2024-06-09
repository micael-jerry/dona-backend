const express = require('express');
const cors = require('cors');
const { helloWorldRouter } = require('./src/routes/hello.routes');
const { userRouter } = require('./src/routes/user.routes');
const { authRouter } = require('./src/routes/auth.routes');

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/api/helloworld', helloWorldRouter);
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

module.exports = app;
