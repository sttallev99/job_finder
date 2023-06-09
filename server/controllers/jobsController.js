const Job = require('../models/jobModel');
const JobType = require('../models/jobTypeModel');
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

//delete job
exports.deleteJob = async (req, res, next) => {
    try {
        const id = req.params.job_id;
        await Job.findByIdAndDelete(id);
        res.status(200).json({
            success: true
        })
    } catch(error) {
        next(error);
    }
}

//update job by id
exports.updateJob = async (req, res, next) => {
    try {
        const job = await Job.findByIdAndUpdate(req.params.job_id, req.body, {new: true}).populate('jobType', 'jobTypeName').populate('user', 'firstName');
        res.status(201).json({
            success: true,
            job
        })
    } catch (error) {
        next(eror);
    }
}

// get all jobs
exports.showJobs = async (req, res, next) => {

    //enable search
    const keyword = req.query.keyword ? {
        title: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}

    //filter jobs by category ids
    let ids = [];
    const jobTypeCategory = await JobType.find({}, {_id:1});
    jobTypeCategory.forEach(cat => {
        ids.push(cat._id);
    });

    let cat = req.query.cat;
    let categ = cat !== '' ? cat : ids;

    //jobs by location
    let locations = [];
    const jobByLocation = await Job.find({}, {location: 1});
    jobByLocation.forEach(val => {
        locations.push(val.location)
    });
    const setUniqueLocation = [...new Set(locations)];
    let location = req.query.location;
    let locationFilter = location !== '' ? location : setUniqueLocation

    //enable pagination
    const pageSize = 5;
    const page = Number(req.query.pageNumber) || 1;
    //const count = await Job.find({}).estimatedDocumentCount();
    const count = await Job.find({ ...keyword, jobType: categ, location: locationFilter }).countDocuments();
    console.log(count)

    try {
        const jobs = await Job.find({ ...keyword, jobType: categ, location: locationFilter }).sort({ createdAt: -1 }).skip(pageSize * (page - 1)).populate('jobType', 'jobTypeName').populate('user', 'firstName lastName').limit(pageSize)
        res.status(200).json({
            success: true,
            jobs,
            page,
            pages: Math.ceil(count / pageSize),
            count,
            setUniqueLocation

        });
    } catch (error) {
        next(eror);
    }
}


