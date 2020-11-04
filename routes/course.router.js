const CourseController = require('../controllers/course.controller');

exports.routersConfig = (app) => {
  app.get('/api/courses', CourseController.findAll);
  app.post('/api/courses', CourseController.save);
  app.get('/api/courses/:id', CourseController.findById);
  app.patch('/api/courses/:id', CourseController.update);
  app.delete('/api/courses/:id', CourseController.delete);
};
