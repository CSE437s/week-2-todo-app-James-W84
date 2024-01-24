const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

require("dotenv").config();
const mongoose = require("mongoose");
const mongoString =
  "mongodb+srv://james_wu:DDMuZBIlYwF3cTiH@todolist.dbwlucj.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoString, { ssl: true });

const Todo = require("./models/model");

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get("/", function (req, res) {
  res.send("Hello world");
});

// app.post("/newuser", async (req, res) => {

// })

app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/newtodo", async (req, res) => {
  const data = new Todo({
    content: req.body.content,
    userId: 12,
    status: "open",
  });

  try {
    const dataToSave = data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/changestatus", async (req, res) => {
  try {
    // console.log(req.body._id);
    const result = await Todo.findOneAndUpdate(
      { _id: req.body._id },
      { $set: { status: req.body.newStatus } }
    );
    if (result) {
      res.json({ message: "Status updated successfully" });
    } else {
      res.json({ message: "Status not updated" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
