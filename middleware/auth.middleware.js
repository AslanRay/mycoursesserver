const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const ErrorLoggModel = require('../models/errorLogg.model');

dotenv.config();

const {
  JWT_KEY,
} = process.env;

const secret = JWT_KEY;

exports.validJWTNeeded = (request, response, next) => {
  if (request.headers.authorization) {
    try {
      const authorization = request.headers.authorization.split(' ');
      if (authorization[0] !== 'Bearer') {
        return response.status(401).send();
      }
      request.jwt = jwt.verify(authorization[1], secret);
      return next();
    } catch (err) {
      ErrorLoggModel.save({ where: 'Auth middleware', errorMessage: err.message, loggedAt: new Date() });
      return response.status(403).send();
    }
  } else {
    return response.status(400).send();
  }
};
