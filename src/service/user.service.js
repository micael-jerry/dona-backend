const { UserModel } = require('../model/user.model');

module.exports.getAll = async () => {
	return UserModel.find({}, { password: 0 });
};

module.exports.getById = async id => {
	return UserModel.findById(id, { password: 0 });
};

module.exports.update = async (userId, userUpdate) => {
	return UserModel.findOneAndUpdate(
		{
			_id: userId,
		},
		{
			lastname: userUpdate.lastname,
			firstname: userUpdate.firstname,
			bio: userUpdate.bio,
			birthday: userUpdate.birthday,
		},
		{
			new: true,
			upsert: false,
		},
	);
};
