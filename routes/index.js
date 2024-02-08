const { Router } = require("express");
const appRouter = Router();

const userRoute = require("./userRouter");
const expensesRoute = require("./expensesRouter");

appRouter.use("/user", userRoute);
appRouter.use("/expenses", expensesRoute);

module.exports = appRouter;
