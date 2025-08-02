const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');

const port = 3001
const host = 'localhost'
const uri = ''

app.use(cors())
app.use(express.json())

// DB connection
const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("DB cunnected");
  } catch (error) {
    console.log("DB connection error: ", error);
  }
}

connect()

const server = app.listen(port, host, () => {
  console.log("server is lisining to port: ", server.address().port)
  console.log("host: ", host)
})