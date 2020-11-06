const { createHashedPassword } = require('../utils/createHashedPassword');
const { compareHashedPassword } = require('../utils/compareHashedPassword');

describe('Test for compareHashedPassword function', () => {
  test('should return truthy value after compare', () => {
    const hashedPassword = createHashedPassword('arkus@123');
    const isValidPassword = compareHashedPassword('arkus@123', hashedPassword);
    expect(isValidPassword).toBeTruthy();
  });
});
