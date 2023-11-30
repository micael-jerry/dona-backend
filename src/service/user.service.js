const { UserModel } = require('../model/user.model');

module.exports.getAll = async () => {
  const users = await UserModel.find();
  return users;
};
