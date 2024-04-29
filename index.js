const express = require('express');
const cors = require('cors');
const { connectDB } = require('./src/config/db');
const { helloWorldRouter } = require('./src/routes/hello.routes');
const { userRouter } = require('./src/routes/user.routes');
const { authRouter } = require('./src/routes/auth.routes');

const app = express();
require('dotenv').config()
connectDB();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/helloworld', helloWorldRouter);
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

// SERVER
app.listen(process.env.PORT || 8080, () => {
    console.log(`Server started on port ${process.env.PORT || 8080}`);
});
