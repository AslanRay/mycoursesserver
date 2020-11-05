const jwt = require('jsonwebtoken');

const generateJWT = (user, jwtKey, tokenExpiration) => {
  const token = jwt.sign({ user }, jwtKey, { expiresIn: tokenExpiration });
  return token;
};

module.exports = { generateJWT };
