const mongoose = require("mongoose");
const { Schema } = mongoose

const JobSchema = new Schema({
  id: { type: String },
  job: { type: String, required: true },
  clientName: { type: String, required: true },
  clientPhoneNumber: { type: Number, required: true },
  jobAddress: { type: String, required: true },
  description: { type: String, required: true },
  jobStatus: { type: String, required: true },
  jobNotes: [String],
  createdDate: {type:Date}
});

module.exports = mongoose.model("Job", JobSchema);
