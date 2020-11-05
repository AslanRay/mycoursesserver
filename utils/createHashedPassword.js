const bcrypt = require('bcrypt');

const createHashedPassword = async (plainPassword, saltRounds = 10) => {
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
};

module.exports = { createHashedPassword };
