const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
  id: { type: String },
  job: { type: String, required: true },
  clientName: { type: String, required: true },
  clientPhoneNumber: { type: Number, required: true },
  addressjobAddress: { type: String, required: true },
  description: { type: String, required: true },
  jobStatus: { type: String, required: true },
  jobNotes: { type: String, required: true },
});

module.exports = mongoose.model("Job", JobSchema);
