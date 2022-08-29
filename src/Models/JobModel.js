const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
  id: { type: String },
  job: { type: String, required: True },
  clientName: { type: String, required: True },
  clientPhoneNumber: { type: number, required: True },
  addressjobAddress: { type: String, required: True },
  description: { type: String, required: True },
  jobStatus: { type: String, required: True },
  jobNotes: { type: String, required: True },
});

module.exports = mongoose.model("Job", JobSchema);
