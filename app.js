const express = require('express');
const cors = require('cors');
const { apiRouter } = require('./src/routes/api.routes');
const { notFoundController } = require('./src/controller/not.found.controller');

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/api', apiRouter);

// OTHER ROUTES
app.use(notFoundController);

module.exports = app;
