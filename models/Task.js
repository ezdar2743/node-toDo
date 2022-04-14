const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please input name"],
    trim: true,
    maxlength: [20, "can not over 20"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
