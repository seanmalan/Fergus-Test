const express = require("express");
const cors = require("cors");
const app = express();
const JobModel = require("./Models/JobModel");
const { errors, Segments, Joi, celebrate } = require("celebrate");

app.use(express.json());
app.use(cors());

app.post(
  "/jobs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      job: Joi.string().required(),
      clientName: Joi.string().required(),
      clientPhoneNumber: Joi.number().required(),
      jobAddress: Joi.string().required(),
      description: Joi.string().required(),
      jobStatus: Joi.string().required(),
      jobNotes: Joi.string().required(),
      createdDate: Joi.date().required(),
    }),
  }),
  async (request, response, next) => {
    try {
      const jobStatus = request.body.jobStatus
       const job = new JobModel(request.body);

      if (jobStatus === "scheduled" || jobStatus === "active" || jobStatus === "invoicing"|| jobStatus === "to priced" || jobStatus === "completed") {
        response.status(201).send(job)
        console.log(request.body.jobStatus)
      } else {
        response.status(400).send({"error": "Please choose an accepted job status"})
        
      }
       await job.save();
        response.status(201).send(job);
        
      
    } catch (error) {
      next(error);
    }
  }
);

app.get("/jobs", async (request, response) => {
  const jobs = await JobModel.find({});
  response.send(jobs).status(200);
});

app.get("/jobs/:id", async (request, response) => {
  const { id } = request.params;
  const job = await JobModel.findById(id);
  response.send(job).status(200);
});

app.use(errors());

module.exports = app;
