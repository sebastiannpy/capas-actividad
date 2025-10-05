const courseService = require("../services/courseService");

function createCourse(req, res) {
  const course = courseService.createCourse(req.body);
  res.status(201).json(course);
}

function getCourses(req, res) {
  const courses = courseService.getCourses();
  res.json(courses);
}

module.exports = {
  createCourse,
  getCourses
};
