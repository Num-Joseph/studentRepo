const express = require("express");

const router = express.Router();

const expensesController = require("../controllers/expensesController");

//CRUD operations
router.get("/", expensesController.getAllExpenses);
router.get("/:id", expensesController.singleExpenses)
router.post("/", expensesController.saveExpenses);
router.delete("/:id", expensesController.deleteExpensesByid);
router.patch("/:id", expensesController.updateExpense);

//Modul exportation
module.exports = router;
