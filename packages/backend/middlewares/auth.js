const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (request, response, next) => {
  const token = request.header('x-auth-token');
  if (!token) {
    return response.status(401).send('Access denied. No token.');
  }

  try {
    request.user = jwt.verify(token, config.get('jwtPrivateKey'));
    return next();
  } catch (exception) {
    return response.status(400).send('Invalid token.');
  }
};
