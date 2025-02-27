const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const scholarshipRoutes = require('./routes/scholarshiproutes');
const eligibilityRoutes = require('./routes/eligibilityroutes');

app.use('/api/scholarships', scholarshipRoutes);
app.use('/api/eligibility', eligibilityRoutes);

module.exports = app;
