const bcrypt = require('bcrypt');

const compareHashedPassword = async (plainPassword, hashedPassword) => {
  const isSame = await bcrypt.compare(plainPassword, hashedPassword);
  return isSame;
};

module.exports = { compareHashedPassword };
