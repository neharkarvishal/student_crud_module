const bcrypt = require('bcrypt');
const express = require('express');
const { User } = require('../models/user');

const router = express.Router();

router.post('/', async (request, response) => {
  const { name, email, password } = request.body;
  let user = await User.findOne({ email });

  if (user) {
    return response.status(400).send('User already registered.');
  }
  user = new User({ name, email, password, isAdmin: true });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  const token = user.generateAuthToken();

  return response.header('x-auth-token', token).send({
    // eslint-disable-next-line no-underscore-dangle
    _id: user._id,
    name: user.name,
    email: user.email,
  });
});

module.exports = router;
