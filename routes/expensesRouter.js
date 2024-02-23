const express = require("express");

const router = express.Router();

const expensesController = require("../controllers/expensesController");

//CRUD operations
router.get("/", expensesController.getAllExpenses);
router.get("/:id", expensesController.singleExpenses);
router.post("/", expensesController.saveExpenses);
router.delete("/:id", expensesController.deleteExpensesByid);
router.patch("/:id", expensesController.updateExpense);
router.get("/dairly", expensesController.getAllPaymentsByDate);
router.get("/weekly", expensesController.getAllWeeklyPaymentsByDate);
router.get("/monthly", expensesController.getAllMonthlyPaymentsByDate);
router.get("/yearly", expensesController.getAllYearlyPaymentsByDate);

//Modul exportation
module.exports = router;
