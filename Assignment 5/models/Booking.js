const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    destination: String,
    persons: Number
});

module.exports = mongoose.model("Booking", bookingSchema);