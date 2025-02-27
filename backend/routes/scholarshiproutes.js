const express = require('express');
const router = express.Router();
const { getScholarships, applyForScholarship } = require('../controllers/scholarshipcontroller');

router.get('/', getScholarships);
router.post('/apply', applyForScholarship);

module.exports = router;
