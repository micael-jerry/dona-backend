const bcrypt = require('bcrypt');

module.exports = {
  async up(db) {
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash('user_one_password', salt);
    const userOne = {
    pseudo: 'user_one',
    email: 'userone@example.com',
    password: password,
    bio: 'user one',
  }
    await db.collection('users').insertOne(userOne);
  },

  async down(db) {
    await db.collection('users').drop();
  }
};
