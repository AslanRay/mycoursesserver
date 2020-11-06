const ErrorLoggController = require('../controllers/errorLogg.controller');
const AuthMiddleware = require('../middleware/auth.middleware');

exports.routersConfig = (app) => {
  app.get('/errorLogger', ErrorLoggController.findAll);
  app.post('/errorLogger', [AuthMiddleware.validJWTNeeded, ErrorLoggController.save]);
};
