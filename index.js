const app = require('./app');
const { connectDB } = require('./src/config/db');

require('dotenv').config()
connectDB();

// SERVER
app.listen(process.env.PORT || 8080, () => {
    console.log(`Server started on port ${process.env.PORT || 8080}`);
});
