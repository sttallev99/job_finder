const JobType = require('../models/jobTitleModel');
const ErrorResponse = require('../utils/errorResonse');

//create job category
exports.createJobType = async(req, res, next) => {
    try {
        const jobT = await JobType.create({
            jobTitleName: req.body.jobTypeName,
            user: req.user.id
        });

        res.status(201).json({
            success: true,
            jobT
        })
    } catch (error) {
        next(error);
    }
}