const ErrorLoggController = require('../controllers/errorLogg.controller');

exports.routersConfig = (app) => {
  app.get('/errorLogger', ErrorLoggController.findAll);
  app.post('/errorLogger', ErrorLoggController.save);
};
