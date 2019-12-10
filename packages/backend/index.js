/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const user = require('./routes/user');

const PORT = process.env.PORT || 8080;
const app = express();

mongoose
  .connect('mongodb://localhost/students')
  .then(() => console.log('Connected…'))
  .catch(err => console.error('Connection failed…', err));

app.use(express.json());
app.use('/api/auth', auth);
app.use('/api/user', user);

app.get('/greeting', (req, res) => {
  res.send({
    message: `Hello, ${req.query.name || 'World'}!`,
  });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
