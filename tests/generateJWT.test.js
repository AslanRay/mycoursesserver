const { generateJWT } = require('../utils/generateJWT');

describe('Test for generateJWT function', () => {
  test('should return JWT string', () => {
    const token = generateJWT({ user: 'Ray' });
    expect(token).toBeDefined();
  });
});
