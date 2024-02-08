const express = require("express");

const router = express.Router();

const expensesController = require("../controllers/expensesController");

//CRUD operations
router.get("/:id", expensesController.getExpenses);
router.post("/createExpenses", expensesController.saveExpenses);
router.delete("/:id", expensesController.deleteExpensesByid);
router.patch("/:id", expensesController.updateExpensesByid);

//Modul exportation
module.exports = router;
