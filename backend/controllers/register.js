const UserSchema = require("../models/User");
const sendCookie = require("../utils/features");
const bcrypt = require("bcrypt");
const errorMiddleware = require("../middlewares/error");

const register = async (req, res, next) => {
    try {
        const {name, email, password, remember} = req.body;
        let user = await UserSchema.findOne({email});

        if(user){
            const err = new Error("User already exists");
            err.statusCode = 400;
            return errorMiddleware(err, req, res, next);
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        user = await UserSchema.create({
            name,
            email,
            password: hashedPassword,
            planType: null,
            planName: null,
            expiry: null,
            remember: remember,
        });
        
        sendCookie(user, res, `Welcome, ${user.name}`, 200);
    } 
    catch (error) {
        error.statusCode = 400;
        errorMiddleware(error, req, res, next);
    }
}

module.exports = register;
