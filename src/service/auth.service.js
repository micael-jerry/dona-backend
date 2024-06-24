const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../model/user.model');
const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../error/error.custom.model');
const { USER_ROLE } = require('../model/types/user.role.type');

module.exports.createUser = async obj => {
	const { pseudo, email, password, bio } = obj;
	return await UserModel.create({ pseudo, email, password, bio, role: USER_ROLE.USER });
};

module.exports.loginUser = async obj => {
	const { email, password } = obj;
	const foundUser = await UserModel.findOne({ email });
	if (foundUser) {
		if (bcrypt.compareSync(password, foundUser.password)) {
			return {
				token: jwt.sign({ user_id: foundUser._id, role: foundUser.role }, process.env.JWT_SECRET_KEY),
				role: foundUser.role,
			};
		}
		throw new CustomError({
			message: `Invalid password`,
			status: StatusCodes.UNAUTHORIZED,
		});
	}
	throw new CustomError({
		message: `Invalid email`,
		status: StatusCodes.UNAUTHORIZED,
	});
};
