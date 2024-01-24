const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  content: {
    required: true,
    type: String,
  },
  userId: {
    required: true,
    type: Number,
  },
  status: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
