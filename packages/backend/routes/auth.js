const bcrypt = require('bcrypt');
const express = require('express');
const { User } = require('../models/user');

const router = express.Router();

router.post('/', async (request, response) => {
  const { email, password } = request.body;
  const user = await User.findOne({ email });

  if (!user) {
    return response.status(400).send('Invalid email or password.');
  }
  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return response.status(400).send('Invalid email or password.');
  }
  const token = user.generateAuthToken();

  return response.send(token);
});

module.exports = router;
