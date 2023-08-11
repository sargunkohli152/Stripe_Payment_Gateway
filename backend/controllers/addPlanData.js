const errorMiddleware = require("../middlewares/error");
const PlanSchema = require("../models/Plan");

const addPlanData = async (req, res, next) => {
    try{
        const {planName, monthlyPrice, 
            yearlyPrice, videoQuality, 
            resolution, devicesToWatch, 
            numberOfActiveScreens} = req.body;
        
        const data = await PlanSchema.create({
            planName, 
            monthlyPrice, 
            yearlyPrice, 
            videoQuality, 
            resolution, 
            devicesToWatch, 
            numberOfActiveScreens
        });

        res.status(200).json({
            success: true,
            message: "plan data created successfully",
            data: data
        })
    }
    catch(error){
        error.statusCode = 400;
        return errorMiddleware(error, req, res, next);
    }
}

module.exports = addPlanData;