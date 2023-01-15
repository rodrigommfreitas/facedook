const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, require: true, min: 3, max: 20, unique: true },
    email: { type: String, require: true, max: 50, unique: true },
    password: { type: String, require: true, min: 6 },
    profilePicture: { type: String, default: '' },
    bannerPicture: { type: String, default: '' },
    followers: { type: Array, default: [] },
    following: { type: Array, default: [] },
    isAdmin: { type: Boolean, default: false },
    bio: { type: String, max: 50, default: '' },
    location: { type: String, max: 50, default: 'unknown' },
    from: { type: String, max: 50, default: 'unknown' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
