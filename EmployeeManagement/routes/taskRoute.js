const express = require('express');
const router = express.Router();
const Task = require('../model/taskModel');


// Route to create a new task
router.post('/', async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status || 'Todo', // Default to 'Todo' if status is not provided
    assignedTo: req.body.assignedTo,
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().populate('assignedTo', 'firstName lastName email');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;