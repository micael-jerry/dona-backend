const express = require('express');
const { connectDB } = require('./src/config/db');
const { pingRoutes } = require('./src/routes/ping.routes');

const app = express();
require('dotenv').config()
connectDB();

// ROUTES
app.use('/ping', pingRoutes);

// SERVER
app.listen(process.env.PORT || 8080, () => {
    console.log(`Server started on port ${process.env.PORT || 8080}`);
});