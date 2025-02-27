const mongoose = require('mongoose');

const scholarshipSchema = new mongoose.Schema({
    title: String,
    description: String,
    deadline: Date,
    amount: Number,
    status: { type: String, default: 'Active' }
});

module.exports = mongoose.model('scholarship', scholarshipSchema);
