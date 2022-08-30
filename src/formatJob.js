const formatJob = (job) => {
  return {
    id: job._id,
  job: job.job,
  clientName: job.clientName,
  clientPhoneNumber: job.clientPhoneNumber,
  jobAddress: job.jobAddress,
  description: job.description,
  jobStatus: job.jobStatus,
  jobNotes: job.jobNotes,
  createdDate: job.createdDate

  }
}

module.exports = { formatJob }