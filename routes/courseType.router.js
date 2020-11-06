const CourseTypeController = require('../controllers/courseType.controllers');
const AuthMiddleware = require('../middleware/auth.middleware');

exports.routersConfig = (app) => {
  app.get('/api/v1/courseTypes', [AuthMiddleware.validJWTNeeded, CourseTypeController.findAll]);
  app.post('/api/v1/courseTypes', [AuthMiddleware.validJWTNeeded, CourseTypeController.save]);
  app.get('/api/v1/courseTypes/:id', [AuthMiddleware.validJWTNeeded, CourseTypeController.findById]);
  app.patch('/api/v1/courseTypes/:id', [AuthMiddleware.validJWTNeeded, CourseTypeController.update]);
  app.delete('/api/v1/courseTypes/:id', [AuthMiddleware.validJWTNeeded, CourseTypeController.delete]);
};
