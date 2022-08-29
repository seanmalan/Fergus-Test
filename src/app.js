const express = require("express")
const cors = require("cors")
const app = express()
const JobModel = require("./Models/JobModel")
const { errors, Segments } = require ("celebrate")
const Joi = require("joi")


app.use(express.json())
app.use(cors())


app.post("/jobs", celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required(),
  job: Joi.string().required(),
  clientName: Joi.string().required(),
  clientPhoneNumber: Joi.number().required(),
  jobAddress: Joi.string().required(),
  description: Joi.string().required(),
  jobStatus: Joi.string().required(),
  jobNotes: Joi.string().required(),
  createdDate: Joi.date().required()
  })
}), async (request, response, next) => {
  try{
    const job = new JobModel(request.body)
  await job.save()
  response.status(201).send(job)
  } catch (error){
    next(error)
  }
  
})



app.get("/jobs", async (request, response) => {
  const jobs = await JobModel.find({})
  response.send(jobs).status(200)
})

app.get("/jobs/:id", async (request, response) => {
  const {id} = request.params
  const job = await JobModel.findById(id)
  response.send(job).status(200)
})

app.use(errors())

module.exports = app