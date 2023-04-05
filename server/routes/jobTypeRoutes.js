const express = require('express');
const { isAuthenticated } = require('../middleware/auth');
const { createJobType } = require('../controllers/jobTypeController');
const router = express.Router();


//user routes
// /api/type/create
router.post('/type/create', isAuthenticated, createJobType);


module.exports = router;