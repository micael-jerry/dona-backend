const mongoose = require('mongoose');
const { default: isEmail } = require('validator/lib/isEmail');

const userSchema = mongoose.Schema({
    pseudo: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate: [isEmail],
        lowercase: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 1024
    },
    picture: {
        type: String,
        default: "./uploads/profil/random-user.png"
    },
    bio: {
        type: String,
        max: 1024,
    },
    followers: {
        type: [String]
    },
    following: {
        type: [String]
    },
    likes: {
        type: [String]
    }
}, {
    timestamps: true
});

module.exports.UserModel = mongoose.model('user', userSchema);