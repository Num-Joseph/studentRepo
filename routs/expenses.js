const express = require("express");

const router = express.Router();

const expenses = require("../../controllers/expenses");

//CRUD operations
router.get("/", expenses.getExpenses);
router.get("/:id", expenses.singleExpenses);
router.post("/", expenses.saveExpenses);
router.delete("/:id", expenses.removeExpenses);
router.patch("/:id", expenses.updateExpenses);

//Modul exportation
module.exports = router;
