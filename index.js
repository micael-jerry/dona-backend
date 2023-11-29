const express = require('express');
const cors = require('cors');
const { connectDB } = require('./src/config/db');
const { pingRoutes } = require('./src/routes/ping.routes');
const { userRoutes } = require('./src/routes/user.routes');

const app = express();
require('dotenv').config()
connectDB();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/ping', pingRoutes);
app.use('/api/user', userRoutes);

// SERVER
app.listen(process.env.PORT || 8080, () => {
    console.log(`Server started on port ${process.env.PORT || 8080}`);
});