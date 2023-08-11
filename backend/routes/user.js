const express = require("express");
const isAuthenticated = require("../middlewares/auth");
const register = require("../controllers/register");
const login = require("../controllers/login");
const getMyProfile = require("../controllers/getMyProfile");
const choosePlan = require("../controllers/choosePlan");
const errorMiddleware = require("../middlewares/error");
const stripe = require("stripe")(process.env.SECRET_KEY);

const userRouter = express.Router();

userRouter.post("/new", (req, res, next) => {
    register(req, res, next);
});

userRouter.post("/login", (req, res, next) => {
    login(req, res, next);
});

userRouter.get("/me", (req, res, next) => {
    isAuthenticated(req, res, next)
}, (req, res) => {
    getMyProfile(req, res);
});

userRouter.put("/choosePlan", (req, res, next) => {
        isAuthenticated(req, res, next)
    },
        (req, res, next) => {
        choosePlan(req, res, next);
})

userRouter.post("/payment", async (req, res, next) => {
    console.log('route reached')
    let {amount, id} = req.body;
    try{
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Streaming Company",
            payment_method: id,
            confirm: true
        })

        console.log("Payment ", payment);
        res.json({
            success: true,
            message: "payment successful"
        })
    }
    catch(error){
        error.statusCode = 400;
        errorMiddleware(error, req, res, next);
    }
})

// userRouter.get("/", (req, res, next) => {
//     defaultRoute(req, res, next);
// });

module.exports = userRouter;