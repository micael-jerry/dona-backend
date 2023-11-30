const { UserModel } = require('../model/user.model');

module.exports.getAll = async () => {
	const users = await UserModel.find();
	return users;
};

module.exports.getById = async id => {
	const user = await UserModel.findById(id);
	return user;
};
