const CourseTypeController = require('../controllers/courseType.controllers');

exports.routersConfig = (app) => {
  app.get('/api/courseTypes', CourseTypeController.findAll);
  app.post('/api/courseTypes', CourseTypeController.save);
  app.get('/api/courseTypes/:id', CourseTypeController.findById);
  app.patch('/api/courseTypes/:id', CourseTypeController.update);
  app.delete('/api/courseTypes/:id', CourseTypeController.delete);
};
