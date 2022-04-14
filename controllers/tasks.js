const getAllTasks = (req, res) => {
  res.send("take task");
};

const createTask = (req, res) => {
  res.send("make new task");
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
