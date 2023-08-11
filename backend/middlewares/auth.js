const errorMiddleware = require("./error");

const isAuthenticated = async (req, res, next) => {
    const {token} = req.cookies;
    if(!token){
        const err = new Error("Login first");
        err.statusCode = 429;
        return errorMiddleware(err, req, res, next);
    }
    next();
}

module.exports = isAuthenticated;