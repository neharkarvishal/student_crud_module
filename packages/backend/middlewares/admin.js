module.exports = (request, response, next) => {
  if (!request.user || !request.user.isAdmin) {
    // 401 Unauthorized - 403 Forbidden
    return response.status(403).send('Access denied.');
  }

  return next();
};
