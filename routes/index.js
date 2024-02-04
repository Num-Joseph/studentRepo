const { Router } = require("express");
const appRouter = Router();

const userRoute = require("./userRouter");
const epensesRoute = require("./expensesRouter");

appRouter.use("/user", userRoute);
appRouter.use("/expense", epensesRoute);

module.exports = appRouter;
