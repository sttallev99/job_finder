
const User = require('../models/userModel');
const ErrorResponse = require('../utils/errorResonse')

exports.signin = async (req, res, next) => {
    const { email, password } = req.body;
    
    if(!email) {
        return next(new ErrorResponse('Please enter email', 403));
    }
    if(!password) {
        return next(new ErrorResponse('Please enter password', 403));
    }

    //check user email
    const user = await User.findOne({ email });
    if(!user) {
        return next(new ErrorResponse('Invalid credentials', 400));
    }

    //check password
    const isMatched = await user.comparePassword(password); 
    if(!isMatched) {
        return next(new ErrorResponse('Invalid credentials', 400));
    }

    sendTokenResponse(user, 200, res);


}
exports.signup = async (req, res, next) => {
    const { email } = req.body;
    const userExist = await User.findOne({email});
    if(userExist) {
        return next(new ErrorResponse('Email already registered', 400));
    }
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            success: true,
            user
        })
    } catch(error) {
        next(error);
    }

}

const sendTokenResponse = async (user, codeStatus, res) => {
    const token = await user.getJwtToken();
    res.status(codeStatus)
        .cookie('token', token, 
            { 
                maxAge: 60 * 60 * 1000, 
                httpOnly: true,
                sameSite: "none",
                secure: true,
                // domain: 'jobsfinder-app.netlify.app'
            })
        .json({ success: true, token, user });
}

// user profile
exports.userProfile = async (req, res, next) => {

    const user = await User.findById(req.user.id).select('-password');
    console.log(user)

    res.status(200).json({
        success: true,
        user
    });
}

// log out
exports.logout = (req, res, next) => {
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: 'Successfully logged out'
    });
}