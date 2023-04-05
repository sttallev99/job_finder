const express = require('express');
const router = express.Router();

const { isAuthenticated } = require('../middleware/auth');
const { createJob } = require('../controllers/jobsController');



//user routes
// /api/job/create
router.post('/jobs/create', isAuthenticated, createJob);


module.exports = router;