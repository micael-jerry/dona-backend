const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

module.exports = {
  async up(db) {
    const salt = await bcrypt.genSalt();
    const passwordOne = await bcrypt.hash('user_one_password', salt);
    const userOne = {
      _id: new mongoose.Types.ObjectId('6677d90a45d1db9a3bd0ac8a'),
      pseudo: 'user_one',
      email: 'userone@example.com',
      password: passwordOne,
      role: 'ADMIN',
      bio: 'user one',
    }
    const passwordTwo = await bcrypt.hash('user_two_password', salt);
    const userTwo = {
      _id: new mongoose.Types.ObjectId('6677d94645d1db9a3bd0ac8d'),
      pseudo: 'user_two',
      email: 'usertwo@example.com',
      password: passwordTwo,
      role: 'USER',
      bio: 'user one',
    }
    await db.collection('users').insertMany([userOne, userTwo])
  },

  async down(db) {
    await db.collection('users').drop();
  }
};
