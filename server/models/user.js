const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: {
    required: true,
    type: Number,
  },
  name: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);
