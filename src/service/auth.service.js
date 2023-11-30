const { UserModel } = require('../model/user.model');

module.exports.createUser = async obj => {
  const { pseudo, email, password } = obj;
  const user = await UserModel.create({ pseudo, email, password });
  return user;
};
