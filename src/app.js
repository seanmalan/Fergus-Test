const express = require("express");
const cors = require("cors");
const app = express();
const JobModel = require("./Models/JobModel");
const { errors, Segments, Joi, celebrate } = require("celebrate");
const {formatJob} = require("./formatJob")

app.use(express.json());
app.use(cors());

const acceptableJobStatus = [
  "scheduled",
  "active",
  "invoicing",
  "to priced",
  "completed",
];

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
    }),
  }),
  async (request, response, next) => {
    try {
      const jobStatus = request.body.jobStatus;
      const job = new JobModel(request.body);

      if (acceptableJobStatus.includes(jobStatus)) {
        await job.save();
        response.status(201).send(formatJob(job));
      } else {
        response.status(400).send({ Error: "please use an accepted job status" });
      }

    } catch (error) {
      next(error);
    }
  }
);

app.patch("/jobs/:id", async (request, response, next) => {
  try {
    const {id} = request.params;
    const updates = request.body;
    const options = { new: true };

    const job = await JobModel.findByIdAndUpdate(id, updates, options);
    response.send(formatJob(job)).status(200);
  } catch (error) {
    next(error);
  }
});

app.get("/jobs", async (request, response) => {
  const jobs = await JobModel.find({});
  response.send(jobs.map(formatJob)).status(200);
});

app.get("/jobs/:id", async (request, response) => {
  const { id } = request.params;
  const job = await JobModel.findById(id);
  response.send(job).status(200);
});

app.use(errors());

module.exports = app;
