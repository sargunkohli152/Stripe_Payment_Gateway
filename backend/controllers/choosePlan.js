const errorMiddleware = require("../middlewares/error");
const UserSchema = require("../models/User");
const jwt = require("jsonwebtoken");

const choosePlan = async (req, res, next) => {
    try{
        const {planName, planType} = req.body;
        const {token} = req.cookies;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const id = decoded._id;

        if(!id){
            const err = new Error("Id not found");
            err.statusCode = 400;
            return errorMiddleware(err, req, res, next);
        }

        let expiry = new Date(Date.now());
        if(planType === "Monthly"){
            expiry.setMonth(expiry.getMonth() + 1);
        }
        else{
            expiry.setFullYear(expiry.getFullYear() + 1);
        }

        const data = await UserSchema.findByIdAndUpdate(id, {
            planName, 
            planType,
            expiry
        }, {new: true});

        if(!data){
            const err = new Error("user not found");
            err.statusCode = 400;
            return errorMiddleware(err, req, res, next);
        }

        res.status(200).json({
            success: true,
            message: "Plan updated or chosen successfully",
            data: data
        })
    }
    catch(error){
        error.statusCode = 400;
        return errorMiddleware(error, req, res, next);
    }
}

module.exports = choosePlan;