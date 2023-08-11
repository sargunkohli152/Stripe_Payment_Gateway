const express = require("express");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user");
const planRouter = require("./routes/plan");
const errorMiddleware = require("./middlewares/error");
const cors = require("cors");

require("dotenv").config();

const app = express();

//middlewares
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use("/api/user/v1", userRouter);
app.use("/api/plan/v1", planRouter);
app.use(errorMiddleware);

module.exports = app;