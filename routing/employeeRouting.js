let express = require("express");
let Employee = require("../Model/employeeModel");
let employeeRouter = express.Router();

employeeRouter.get("/employee", async (req, res) => {
  let result = await Employee.find();
  res.send(result);
});

employeeRouter.post("/employee", async (req, res) => {
  let employee = new Employee(req.body);
  let result = await employee.save();
  res.send(result);
});

employeeRouter.delete("/employee/:id", async (req, res) => {
  let result = await Employee.deleteOne({ _id: req.params.id });
  res.send(result);
});

employeeRouter.put("/employee/:id", async (req, res) => {
  let result = await Employee.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});

module.exports = employeeRouter;
