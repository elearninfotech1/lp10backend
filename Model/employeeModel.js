let mongoose = require("mongoose");

let employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  salary: Number,
  address: String,
});

module.exports = mongoose.model("employee", employeeSchema);
