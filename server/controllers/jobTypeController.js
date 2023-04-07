const JobType = require('../models/jobTypeModel');
const ErrorResponse = require('../utils/errorResonse');

//create job category
exports.createJobType = async (req, res, next) => {
    try {
        const jobT = await JobType.create({
            jobTypeName: req.body.jobTypeName,
            user: req.user.id
        });
        res.status(201).json({
            success: true,
            jobT
        })
    } catch (error) {
        next(eror);
    }
}

//create job category
exports.allJobType = async (req, res, next) => {
    try {
        const jobT = await JobType.find();
        res.status(200).json({
            success: true,
            jobT
        })
    } catch (error) {
        next(eror);
    }
}

//update job category
exports.updateJobType = async (req, res, next) => {
    try {
        const jobT = await JobType.findByIdAndUpdate(req.params.type_id, req.body, {new: true});
        res.status(200).json({
            success: true,
            jobT
        })
    } catch (error) {
        next(eror);
    }
}

//delete job category
exports.deleteJobType = async (req, res, next) => {
    try {
        const jobT = await JobType.findByIdAndRemove(req.params.type_id);
        res.status(200).json({
            success: true,
            message: "Job type deleted"
        })
    } catch (error) {
        next(new ErrorResponse("Server error", 500));
    }
}