const Task = require("mongoose");

const getAllTasks = (req, res) => {
  res.send("take task");
};

const createTask = async (req, res) => {
  try {
    const createTask = await Task.create(req.body);
    res.status(200).json(createTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingleTask = (req, res) => {
  res.send("take id tast");
};

const updateTask = (req, res) => {
  res.send("change task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
