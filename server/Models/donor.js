const mongoose = require('mongoose');

const donorSchema = mongoose.Schema({
    DonorID: {
        type: Number,
        required: true,
        unique: true,
    },
    Name: {
        type: String,
        required: true,
    },
    BloodType: {
        type: String,
        enum: ["A+", "A-","B+","B-","O+","O-","AB+", "AB-"],
        required: true,
    },
    Contact: {
        type: Number,
        min: 999999999,
        max: 9999999999,
        required: true,
    },
    LastDonation: {
        type: Date,
        required: true,
    }
});

const Donor = mongoose.model('Donor', donorSchema);

module.exports = Donor;

