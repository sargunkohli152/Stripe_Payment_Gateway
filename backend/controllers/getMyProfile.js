const jwt = require("jsonwebtoken");
const UserSchema = require("../models/User");

const getMyProfile = async (req, res) => {
    const {token} = req.cookies;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const data = await UserSchema.findById(decoded._id);
    
    res.status(200).json({
        success: true,
        data: data,
    })
}

module.exports = getMyProfile;