const express = require('express');
const { connectDB } = require('./src/config/db');
const { pingRoutes } = require('./src/routes/ping.routes');
const { userRoutes } = require('./src/routes/user.routes');

const app = express();
require('dotenv').config()
connectDB();

// MIDDLEWARES
app.use(express.json());

// ROUTES
app.use('/ping', pingRoutes);
app.use('/api/user', userRoutes);

// SERVER
app.listen(process.env.PORT || 8080, () => {
    console.log(`Server started on port ${process.env.PORT || 8080}`);
});