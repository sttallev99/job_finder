const Job = require('../models/jobModel');
const ErrorResponse = require('../utils/errorResonse');

//create job category
exports.createJob = async (req, res, next) => {
    try {
        const job = await Job.create({
            title: req.body.title,
            description: req.body.description,
            salary: req.body.salary,
            location: req.body.location,
            jobType: req.body.jobType,
            user: req.user.id
        });
        res.status(201).json({
            success: true,
            job
        })
    } catch (error) {
        next(eror);
    }
}

//single job
exports.singleJob = async (req, res, next) => {
    try {
        const job = await Job.findById(req.params.id);
        res.status(201).json({
            success: true,
            job
        })
    } catch (error) {
        next(eror);
    }
}

//update job by id
exports.updateJob = async (req, res, next) => {
    try {
        const job = await Job.findByIdAndUpdate(req.params.id.job_id, req.body, {new: true}).populate('jobType', 'jobTypeName').populate('user', 'firstName');
        res.status(201).json({
            success: true,
            job
        })
    } catch (error) {
        next(eror);
    }
}