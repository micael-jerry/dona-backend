const bcrypt = require('bcrypt');

module.exports = {
  async up(db) {
    const salt = await bcrypt.genSalt();
    const passwordOne = await bcrypt.hash('user_one_password', salt);
    const userOne = {
      _id: "user_one_id",
      pseudo: 'user_one',
      email: 'userone@example.com',
      password: passwordOne,
      bio: 'user one',
    }
    const passwordTwo = await bcrypt.hash('user_two_password', salt);
    const userTwo = {
      _id: "user_two_id",
      pseudo: 'user_two',
      email: 'usertwo@example.com',
      password: passwordTwo,
      bio: 'user one',
    }
    await db.collection('users').insertMany([userOne, userTwo])
  },

  async down(db) {
    await db.collection('users').drop();
  }
};
