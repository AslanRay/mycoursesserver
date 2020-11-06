const UserCoursesTrackerController = require('../controllers/userCoursesTracker.controller');
const AuthMiddleware = require('../middleware/auth.middleware');

exports.routersConfig = (app) => {
  app.get('/api/v1/userCoursesTracker', UserCoursesTrackerController.findAll);
  app.post('/api/v1/userCoursesTracker', [AuthMiddleware.validJWTNeeded, UserCoursesTrackerController.save]);
  app.get('/api/v1/userCoursesTracker/:id', UserCoursesTrackerController.findById);
  app.patch('/api/v1/userCoursesTracker/:id', [AuthMiddleware.validJWTNeeded, UserCoursesTrackerController.update]);
  app.delete('/api/v1/userCoursesTracker/:id', [AuthMiddleware.validJWTNeeded, UserCoursesTrackerController.delete]);
};
