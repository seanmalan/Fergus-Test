const express = require("express")
const cors = require("cors")
const app = express()
const JobModel = require("./Models/JobModel")

app.use(express.json())
app.use(cors())




app.get("/jobs", async (request, response) => {
  const jobs = await JobModel.find({})
  response.send(jobs).status(200)
})

app.get("/jobs/:id", async (request, response) => {
  const {id} = request.params
  const job = await JobModel.findById(id)
  response.send(job).status(200)
})


module.exports = app