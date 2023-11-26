const express = require('express');
const { connectDB } = require('./src/config/db');

const app = express();
require('dotenv').config()
connectDB();

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server started on port ${process.env.PORT || 8080}`);
});