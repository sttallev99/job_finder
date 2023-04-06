const express = require('express');
const router = express.Router();

const { isAuthenticated, isAdmin } = require('../middleware/auth');
const { createJob, singleJob, updateJob } = require('../controllers/jobsController');



//user routes
// /api/job/create
router.post('/jobs/create', isAuthenticated, isAdmin, createJob);
// /api/job/id
router.get('/jobs/:id', singleJob);
// /api/job/update/job_id
router.put('/jobs/update/:job_id', isAuthenticated, isAdmin, updateJob);


module.exports = router;