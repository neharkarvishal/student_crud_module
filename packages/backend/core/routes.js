const express = require('express');
const user = require('../routes/user');
const auth = require('../routes/auth');
const student = require('../routes/student');

module.exports = app => {
  app.use(express.json());
  app.use('/api/user', user);
  app.use('/api/auth', auth);
  app.use('/api/student', student);
};
