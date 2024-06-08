const mongoose = require('mongoose');

const connectDB = async () => {
	await mongoose
		.connect(process.env.DATABASE_URL, {
			dbName: process.env.DATABASE_NAME,
			bufferCommands: true,
			autoIndex: true, // use the index to check data uniqueness
		})
		.then(() => console.log(`DATABASE connection SUCCESSFULY`))
		.catch(err => {
			throw err;
		});
};

const disconnectDB = async () => {
	await mongoose
		.disconnect()
		.then(() => console.log(`DATABASE connection CLOSED`))
		.catch(err => {
			console.log(err);
			process.exit();
		});
};

module.exports.connectDB = connectDB;
module.exports.disconnectDB = disconnectDB;
