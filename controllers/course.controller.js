const CourseModel = require('../models/course.model');
const ErrorLoggModel = require('../models/errorLogg.model');

exports.findAll = async (request, response) => {
  try {
    const courses = await CourseModel.find();

    response.status(200).send({
      data: courses,
    });
  } catch (error) {
    ErrorLoggModel.save({ where: 'Course find all', errorMessage: error.message, loggedAt: new Date() });
    response.status(500).send({});
  }
};

exports.findById = async (request, response) => {
  try {
    const { id } = request.params;
    const course = await CourseModel.findById(id);

    if (course) {
      response.status(200).send({
        data: course,
      });
    } else {
      response.status(404).send({
        data: null,
        message: `Course ${id} not found`,
      });
    }
  } catch (error) {
    ErrorLoggModel.save({ where: 'Course find by id', errorMessage: error.message, loggedAt: new Date() });
    response.status(500).send({});
  }
};

exports.save = async (request, response) => {
  try {
    const { name, link, description } = request.body;

    await CourseModel.save({ name, link, description });

    response.status(201).send({});
  } catch (error) {
    ErrorLoggModel.save({ where: 'Course save', errorMessage: error.message, loggedAt: new Date() });
    response.status(500).send({});
  }
};

exports.update = async (request, response) => {
  try {
    const { id } = request.params;
    const {
      name, link, description,
    } = request.body;

    await CourseModel.update(id, { name, link, description });

    response.status(204).send();
  } catch (error) {
    ErrorLoggModel.save({ where: 'Course update', errorMessage: error.message, loggedAt: new Date() });
    response.status(500).send({});
  }
};

exports.delete = async (request, response) => {
  try {
    const { id } = request.params;
    await CourseModel.delete(id);
    response.status(204).send();
  } catch (error) {
    ErrorLoggModel.save({ where: 'Course delete', errorMessage: error.message, loggedAt: new Date() });
    response.status(500).send({});
  }
};
