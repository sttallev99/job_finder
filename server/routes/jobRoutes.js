const express = require('express');
const router = express.Router();

const { isAuthenticated, isAdmin } = require('../middleware/auth');
const { createJob, singleJob, updateJob, showJobs } = require('../controllers/jobsController');



//user routes
// /api/jobs/create
router.post('/job/create', isAuthenticated, isAdmin, createJob);
// /api/jobs/id
router.get('/job/:id', singleJob);
// /api/jobs/update/job_id
router.put('/job/update/:job_id', isAuthenticated, isAdmin, updateJob);
// /api/jobs/show
router.get('/jobs/show', showJobs);


module.exports = router;