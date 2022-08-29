const express = require("express")
const cors = require("cors")
const app = express

app.request(express.json())


app.get("/jobs", async (request, response) => {
  const jobs = await JobModel.find({})
  response.send(jobs).status(200)
})