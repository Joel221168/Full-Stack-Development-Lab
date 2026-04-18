const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Appointment = require("./models/Appointment");

const app = express();

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/appointmentDB")
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
app.get("/book", (req, res) => {
    res.render("book");
});

// Save Appointment
app.post("/book", async (req, res) => {
    const newAppointment = new Appointment({
        name: req.body.name,
        email: req.body.email,
        service: req.body.service,
        date: req.body.date
    });

    await newAppointment.save();
    res.redirect("/appointments");
});

// View All Appointments
app.get("/appointments", async (req, res) => {
    const data = await Appointment.find();
    res.render("appointments", { appointments: data });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});