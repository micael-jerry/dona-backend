const { UserModel } = require('../model/user.model');

module.exports.getAll = async () => {
	return await UserModel.find({}, { password: 0 });
};

module.exports.getById = async id => {
	const user = await UserModel.findById(id, { password: 0 });
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
