const errorMiddleware = require("../middlewares/error");
const PlanSchema = require("../models/Plan");

const planController = async (req, res, next) => {
    try{
        const data = await PlanSchema.find();
        res.status(200).json({
            success: true,
            data: data,
        })
    }
    catch(error){
        error.statusCode = 400;
        return errorMiddleware(error, req, res, next);
    }
}

module.exports = planController;