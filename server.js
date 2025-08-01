const express = require("express");
const app = express();
const cors = require("cors");

const port = 3001
const host = 'localhost'

app.use(cors())
app.use(express.json())

const server = app.listen(port, host, () => {
  console.log("server is lisining to port: ", server.address().port)
  console.log("host: ", host)
})