const mongoose = require('mongoose');

const jobTitleSchema = new mongoose.Schema({

    jobTypeName: {
        type: String,
        trim: true,
        required: [true, 'Job category is required'],
        maxlength: 70
    },

    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

}, {timestamps: true});

module.exports = mongoose.model('JobType', jobTitleSchema)