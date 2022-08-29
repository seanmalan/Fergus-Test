const mongoose = require("mongoose");
const port = 5001
const app = require("./app")

mongoose.connect("mongodb://localhost:27017/mongo")

app.listen(port, () => {
  console.log(`API server started on http://localhost:${port}`)
})