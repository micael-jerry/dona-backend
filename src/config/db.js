const mongoose = require('mongoose');

const connectDB = async () => {
	await mongoose
		.connect(process.env.DATABASE_URL, {
			bufferCommands: true,
			autoIndex: false,
		})
		.then(() => console.log(`DATABASE connection SUCCESSFULY`))
		.catch(err => {
			console.log(err);
			process.exit();
		});
};

module.exports.connectDB = connectDB;
