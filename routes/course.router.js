const CourseController = require('../controllers/course.controller');
const AuthMiddleware = require('../middleware/auth.middleware');

exports.routersConfig = (app) => {
  app.get('/api/v1/courses', [AuthMiddleware.validJWTNeeded, CourseController.findAll]);
  app.post('/api/v1/courses', [AuthMiddleware.validJWTNeeded, CourseController.save]);
  app.get('/api/v1/courses/:id', [AuthMiddleware.validJWTNeeded, CourseController.findById]);
  app.patch('/api/v1/courses/:id', [AuthMiddleware.validJWTNeeded, CourseController.update]);
  app.delete('/api/v1/courses/:id', [AuthMiddleware.validJWTNeeded, CourseController.delete]);
};
