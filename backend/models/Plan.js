const mongoose = require('mongoose')


const PlanSchema = new mongoose.Schema({
    planName:{
        type : String,
        required: true,
    },
    monthlyPrice:{
        type: Number,
        required: true,
    },
    yearlyPrice:{
        type: Number,
        required: true,
    },
    videoQuality:{
        type: String,
        required: true,
    },
    resolution: {
        type: String,
        required: true,
    },
    devicesToWatch:{
        type: String,
        required: true,
    },
    numberOfActiveScreens: {
        type : Number,
        required: true,
    },
})  

module.exports = mongoose.model('PlanSchema', PlanSchema)