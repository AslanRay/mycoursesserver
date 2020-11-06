const CourseTypeModel = require('../models/courseType.model');
const ErrorLoggModel = require('../models/errorLogg.model');

exports.findAll = async (request, response) => {
  try {
    const courseType = await CourseTypeModel.find();

    response.status(200).send({
      data: courseType,
    });
  } catch (error) {
    ErrorLoggModel.save({ where: 'Course type find all', errorMessage: error.message, loggedAt: new Date() });
    response.status(500).send({});
  }
};

exports.findById = async (request, response) => {
  try {
    const { id } = request.params;
    const courseType = await CourseTypeModel.findById(id);

    if (courseType) {
      response.status(200).send({
        data: courseType,
      });
    } else {
      response.status(404).send({
        data: null,
        message: `CourseType ${id} not found`,
      });
    }
  } catch (error) {
    ErrorLoggModel.save({ where: 'Course type find by id', errorMessage: error.message, loggedAt: new Date() });
    response.status(500).send({});
  }
};

exports.save = async (request, response) => {
  try {
    const { name } = request.body;

    await CourseTypeModel.save({ name });

    response.status(201).send({});
  } catch (error) {
    ErrorLoggModel.save({ where: 'Course type create', errorMessage: error.message, loggedAt: new Date() });
    response.status(500).send({});
  }
};

exports.update = async (request, response) => {
  try {
    const { id } = request.params;
    const { name } = request.body;

    await CourseTypeModel.update(id, { name });

    response.status(204).send();
  } catch (error) {
    ErrorLoggModel.save({ where: 'Course type update', errorMessage: error.message, loggedAt: new Date() });
    response.status(500).send({});
  }
};

exports.delete = async (request, response) => {
  try {
    const { id } = request.params;
    await CourseTypeModel.delete(id);
    response.status(204).send();
  } catch (error) {
    ErrorLoggModel.save({ where: 'Course type delete', errorMessage: error.message, loggedAt: new Date() });
    response.status(500).send({});
  }
};
