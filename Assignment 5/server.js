const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Booking = require("./models/Booking");

const app = express();

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/travelDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Home Page
app.get("/", (req, res) => {
    res.render("index");
});

// Booking Page
app.get("/booking", (req, res) => {
    res.render("booking");
});

// Save booking to database
app.post("/booking", async (req, res) => {

    const newBooking = new Booking({
        name: req.body.name,
        email: req.body.email,
        destination: req.body.destination,
        persons: req.body.persons
    });

    await newBooking.save();

    res.send("Booking Successful!");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});