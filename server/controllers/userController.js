const User = require('../models/userModel');
const ErrorResponse = require('../utils/errorResonse');

//load all users
exports.allUsers = async (req, res, next) => {

    //enable pagination
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;
    const count = await User.find({}).estimatedDocumentCount();

    try {
        const users = await User.find().sort({ cretedAt: -1}).select('-password')
            .skip(pageSize * (page - 1))
            .limit(pageSize);

        res.status(200).json({
            success: true,
            users,
            page,
            pages: Math.ceil( count / pageSize ),
            count
        });
        next();
    } catch (error) {
        return next(error);
    }
}

//show single user
exports.singleUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            success: true,
            user
        });
        
    } catch (error) {

    }
}

//edit user
exports.editUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            success: true,
            user
        });

    } catch (error) {

    }
}

//delete user
exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndRemove(req.user.id);
        res.status(200).json({
            success: true,
            message: 'user deleted'
        });

    } catch (error) {

    }
}
