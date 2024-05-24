const app = require('./app');
const { disconnectDB } = require('./src/config/db');

// SERVER
const server = app.listen(process.env.PORT || 8080, () => {
    console.log(`Server started on port ${process.env.PORT || 8080}`);
});

const closeServer = async () => {
    server.close();
    await disconnectDB();
}

module.exports.closeServer = closeServer;
