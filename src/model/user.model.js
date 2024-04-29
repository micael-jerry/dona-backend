const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { default: isEmail } = require('validator/lib/isEmail');

const userSchema = mongoose.Schema(
	{
		pseudo: {
			type: String,
			required: true,
			minLength: 3,
			maxLength: 50,
			unique: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			validate: [isEmail],
			lowercase: true,
			unique: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			minLength: 6,
		},
		bio: {
			type: String,
			max: 1000,
		},
	},
	{
		timestamps: true,
	},
);

userSchema.pre('save', async next => {
	const salt = await bcrypt.genSalt();
	this.password = bcrypt.hashSync(this.password, salt);
	next();
});

module.exports.UserModel = mongoose.model('user', userSchema);
