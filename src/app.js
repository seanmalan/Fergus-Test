const express = require("express")
const cors = require("cors")
const app = express()
const JobModel = require("./Models/JobModel")

app.use(express.json())


app.get("/jobs", async (request, response) => {
  const jobs = await JobModel.find({})
  response.send(jobs).status(200)
})


module.exports = app