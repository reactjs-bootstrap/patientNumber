const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  name: String,
  room: Number,
  ref: Boolean,
});
const PatientModel =
  mongoose.models.patients || mongoose.model("patients", PatientSchema);
module.exports = PatientModel;
