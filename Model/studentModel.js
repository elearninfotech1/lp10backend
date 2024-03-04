let mongoose = require("mongoose");

let studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  address: String,
});

module.exports = mongoose.model("students", studentSchema);
