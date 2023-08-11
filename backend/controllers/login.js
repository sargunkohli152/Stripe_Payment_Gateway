const UserSchema = require("../models/User");
const bcrypt = require("bcrypt");
const errorMiddleware = require("../middlewares/error");
const sendCookie = require("../utils/features");

const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        const user = await UserSchema.findOne({email});
        if(!user){
            const err = new Error("Email not found");
            err.statusCode = 404;
            return errorMiddleware(err, req, res, next);
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            const err = new Error("Invalid password");
            err.statusCode = 429;
            return errorMiddleware(err, req, res, next);
        }

        sendCookie(user, res, `Welcome, ${user.name}`, 200);
    } 
    catch (error) {
        error.statusCode = 400;
        return errorMiddleware(error, req, res, next);
    }
}

module.exports = login