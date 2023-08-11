const express = require("express");
const planController = require("../controllers/planController");
const addPlanData = require("../controllers/addPlanData");

const planRouter = express.Router();

planRouter.get("/", planController);

planRouter.post("/addPlanData", addPlanData);

module.exports = planRouter;