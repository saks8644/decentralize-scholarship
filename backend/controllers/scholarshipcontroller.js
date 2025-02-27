const Scholarship = require('../models/scholarship');

// Fetch all scholarships
exports.getScholarships = async (req, res) => {
    const scholarships = await Scholarship.find();
    res.json(scholarships);
};

// Apply for a scholarship (optional: add wallet address)
exports.applyForScholarship = async (req, res) => {
    const { userId, scholarshipId } = req.body;

    // Handle application logic, could also trigger smart contract interaction.
    res.json({ message: `Application submitted for Scholarship ID: ${scholarshipId}` });
};
