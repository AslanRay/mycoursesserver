const CourseController = require('../controllers/course.controller');

exports.routersConfig = (app) => {
  app.get('/api/v1/courses', CourseController.findAll);
  app.post('/api/v1/courses', CourseController.save);
  app.get('/api/v1/courses/:id', CourseController.findById);
  app.patch('/api/v1/courses/:id', CourseController.update);
  app.delete('/api/v1/courses/:id', CourseController.delete);
};
