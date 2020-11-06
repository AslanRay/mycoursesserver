const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const { JWT_KEY, TOKEN_EXPIRATION } = process.env;

const generateJWT = (user) => {
  const token = jwt.sign({ user }, JWT_KEY, { expiresIn: TOKEN_EXPIRATION });
  return token;
};

module.exports = { generateJWT };
