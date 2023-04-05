const express = require('express');
const { isAuthenticated } = require('../middleware/auth');
const { createJobType, allJobType } = require('../controllers/jobTypeController');
const router = express.Router();


//user routes
// /api/type/create
router.post('/type/create', isAuthenticated, createJobType);
// /api/type/jobs
router.get('/type/jobs', allJobType);


module.exports = router;