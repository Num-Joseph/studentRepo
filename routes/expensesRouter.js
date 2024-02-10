const express = require("express");

const router = express.Router();

const expensesController = require("../controllers/expensesController");

//CRUD operations
router.get("/getAllExpenses", expensesController.getAllExpenses);
router.post("/createExpenses", expensesController.saveExpenses);
router.delete("/deleteExpenses/:id", expensesController.deleteExpensesByid);
router.patch("/updateExpenses/:id", expensesController.updateExpensesByid);

//Modul exportation
module.exports = router;
