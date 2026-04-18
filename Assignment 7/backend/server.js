const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Feedback = require("./models/Feedback");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/feedbackDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Add feedback
app.post("/feedback", async (req, res) => {
  const data = new Feedback(req.body);
  await data.save();
  res.send("Feedback saved");
});

// Get feedback
app.get("/feedback", async (req, res) => {
  const data = await Feedback.find();
  res.json(data);
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});