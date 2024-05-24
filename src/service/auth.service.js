const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../model/user.model');
const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../error/error.custom.model');

module.exports.createUser = async obj => {
	const { pseudo, email, password } = obj;
	const user = await UserModel.create({ pseudo, email, password });
	return user;
};

module.exports.loginUser = async obj => {
	const { email, password } = obj;
	const foundUser = await UserModel.findOne({ email });
	if (foundUser) {
		if (bcrypt.compareSync(password, foundUser.password)) {
			return {
				token: jwt.sign({ userId: foundUser._id }, process.env.JWT_SECRET_KEY),
			};
		}
		throw new CustomError({
			message: `Invalid password for this user: ${email}`,
			status: StatusCodes.UNAUTHORIZED,
		});
	}
	throw new CustomError({
		message: `User not found`,
		status: StatusCodes.UNAUTHORIZED,
	});
};
