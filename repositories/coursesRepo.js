let courses = [];

function createCourse(course) {
  courses.push(course);
  return course;
}

function getAllCourses() {
  return courses;
}

module.exports = {
  createCourse,
  getAllCourses
};
