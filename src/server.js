const mongoose = require("mongoose");
const port = 5001

mongoose.connect("mongodb://localhost:27017/Fergus")
const app = require("./app")

app.listen(port, () => {
  console.log(`API server started on http://localhost:${port}`)
})