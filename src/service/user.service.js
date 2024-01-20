const { UserModel } = require('../model/user.model');

module.exports.getAll = async () => {
	const users = await UserModel.find();
	return users;
};

module.exports.getById = async id => {
	const user = await UserModel.findById(id);
	return user;
};

module.exports.update = async (userId, userUpdate) => {
	const userUpdated = await UserModel.findOneAndUpdate(
		{
			_id: userId,
		},
		{
			bio: userUpdate.bio,
		},
		{
			new: true,
			upsert: false,
		},
	);
	return userUpdated;
};
