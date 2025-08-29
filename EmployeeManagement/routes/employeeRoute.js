const express = require('express');
const router = express.Router();
const Employee = require('../model/employeeModel');

// Route to get all employees
router.get('/',  async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to create a new employee
router.post('/', async (req, res) => {
  const employee = new Employee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    salary: req.body.salary,
    otrate: req.body.otrate,
    totalot: req.body.totalot,
    totalsalary: req.body.totalsalary,
    password:  req.body.password,
    role:  req.body.role
  });

  try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;