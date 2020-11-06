const { createHashedPassword } = require('../utils/createHashedPassword');

describe('Test for createHashedPassword function', () => {
  test('should return hashed password', () => {
    const hashedPassword = createHashedPassword('arkus@123');
    expect(hashedPassword).toBeDefined();
  });
});
