const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    planType: {
        type: String,
    },
    planName: {
        type: String,
    },
    expiry: {
        type: Date
    }
})

module.exports = mongoose.model("UserSchema", UserSchema);