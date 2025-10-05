const express = require("express");
const path = require("path");
const app = express();
const port = 5002;

app.use(express.json());


app.use(express.static(path.join(__dirname, "public")));

// Rutas de estudiantes y cursos
const studentsRoute = require("./routes/students");
const coursesRoute = require("./routes/courses");
app.use("/students", studentsRoute);
app.use("/courses", coursesRoute);


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "frontend.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
