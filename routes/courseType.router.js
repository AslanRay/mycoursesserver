const CourseTypeController = require('../controllers/courseType.controllers');

exports.routersConfig = (app) => {
  app.get('/api/v1/courseTypes', CourseTypeController.findAll);
  app.post('/api/v1/courseTypes', CourseTypeController.save);
  app.get('/api/v1/courseTypes/:id', CourseTypeController.findById);
  app.patch('/api/v1/courseTypes/:id', CourseTypeController.update);
  app.delete('/api/v1/courseTypes/:id', CourseTypeController.delete);
};
