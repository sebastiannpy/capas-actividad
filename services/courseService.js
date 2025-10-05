const coursesRepo = require("../repositories/coursesRepo");

function createCourse(courseData) {
  const course = {
    id: Date.now(), // ID único
    name: courseData.name,
    teacher: courseData.teacher
  };
  return coursesRepo.createCourse(course);
}

function getCourses() {
  return coursesRepo.getAllCourses();
}

module.exports = {
  createCourse,
  getCourses
};
