const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config()
// Routes
const userRouter = require('./UserManagement/routes/userRouter')
const inventoryRoute = require('./inventoryStockSupplierManagement/routes/inventoryRoute')
const stockRouter = require('./inventoryStockSupplierManagement/routes/stockRoute')
const employeeRouter = require('./EmployeeManagement/routes/employeeRoute');
const attendanceRouter = require('./EmployeeManagement/routes/attendanceRoute');
const taskRouter = require('./EmployeeManagement/routes/taskRoute');
const inquiryRouter = require('./inquiryManagement/route/inquiryRouter')


const port = process.env.PORT;
const host = process.env.HOST;
const uri = process.env.MONGODB_URI;

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


//user management
app.use('/api/user', userRouter)

//inventory management
app.use("/api/inventory", inventoryRoute);
app.use("/api/stock", stockRouter);

//Employee management
app.use("/api/emp", employeeRouter);
app.use("/api/attendance", attendanceRouter);
app.use("/api/tasks", taskRouter);

//inquiry management
app.use("/api/inquiry", inquiryRouter);


