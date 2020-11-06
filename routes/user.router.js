const UserController = require('../controllers/user.controller');
const AuthMiddleware = require('../middleware/auth.middleware');

exports.routersConfig = (app) => {
  app.get('/api/v1/users', [AuthMiddleware.validJWTNeeded, UserController.findAll]);
  app.post('/api/v1/users', [AuthMiddleware.validJWTNeeded, UserController.save]);
  app.get('/api/v1/users/:id', [AuthMiddleware.validJWTNeeded, UserController.findById]);
  app.patch('/api/v1/users/:id', [AuthMiddleware.validJWTNeeded, UserController.update]);
  app.delete('/api/v1/users/:id', [AuthMiddleware.validJWTNeeded, UserController.delete]);
  app.post('/api/v1/login', UserController.login);
};
