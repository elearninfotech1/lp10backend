let express = require("express");
require("./db");
let cors = require("cors");
let Student = require("./Model/studentModel");
let employeeRouter = require("./routing/employeeRouting");
let signupRouter = require("./routing/signupRouting");
let app = express();

app.use(cors());
app.use(express.json());
app.use("/", employeeRouter);
app.use("/", signupRouter);
app.get("/student", async (req, res) => {
  let result = await Student.find();
  res.send(result);
});

app.post("/student", async (req, res) => {
  let student = new Student(req.body);
  let result = await student.save();
  res.send(result);
});

app.delete("/student/:id", async (req, res) => {
  let result = await Student.deleteOne({ _id: req.params.id });
  res.send(result);
});

app.get("/student/:id", async (req, res) => {
  let result = await Student.findOne({ _id: req.params.id });
  res.send(result);
});

app.put("/student/:id", async (req, res) => {
  let result = await Student.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});

app.listen(4000);
