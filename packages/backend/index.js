const express = require('express');

const app = express();

require('./core/routes')(app);
require('./core/db')();
require('./core/config')();

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${PORT}!`),
);

module.export = server;
