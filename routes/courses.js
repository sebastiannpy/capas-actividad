const express = require("express");
const router = express.Router();
const coursesController = require("../controllers/coursesController");


router.post("/", coursesController.createCourse);


router.get("/", coursesController.getCourses);

module.exports = router;
