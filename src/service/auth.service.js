const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../model/user.model');

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
				userId: foundUser._id,
				token: jwt.sign({userId: foundUser._id}, process.env.JWT_SECRET_KEY),
			}
		}
		return Promise.reject(`Invalid password for this user: ${email}`)
	}
	return Promise.reject(`User not found`);
};
