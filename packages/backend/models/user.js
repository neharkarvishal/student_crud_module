const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
  },
});

userSchema.methods.generateAuthToken = () => {
  return jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    config.get('jwtPrivateKey'),
  );
};

const User = mongoose.model('User', userSchema);

module.exports = {
  User,
};
