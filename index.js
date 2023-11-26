const express = require('express');
const app = express();

require('dotenv').config()

app.listen(process.env.PORT || 8080, (req, res) => {
    console.log(`Server started on port ${process.env.PORT || 8080}`);
});