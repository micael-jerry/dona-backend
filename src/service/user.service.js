const { UserModel } = require("../model/user.model")

module.exports.createUser = async (obj) => {
    const { pseudo, email, passowrd } = obj;
    const user = await UserModel.create({pseudo, email, passowrd});
    return user;
}