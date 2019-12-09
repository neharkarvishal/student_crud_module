/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;
const app = express();

mongoose
  .connect('mongodb://localhost/students')
  .then(() => console.log('Connected…'))
  .catch(err => console.error('Connection failed…', err));

app.get('/greeting', (req, res) => {
  res.send({
    message: `Hello, ${req.query.name || 'World'}!`,
  });
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
