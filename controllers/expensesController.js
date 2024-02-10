const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// creating an expenses
const saveExpenses = async (req, res, next) => {
  let { itermName, quantity, amount, totalAmount } = req.body;
  try {
    // Creating an expense
    const createExpenses = await prisma.expenses.create({
      data: {
        itermName,
        quantity,
        amount,
        totalAmount,
      },
    });
    res.status(201).json({
      createExpenses,
      message: "Expense successfuly created",
      expenses: createExpenses,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
  next();
};

//gitting all expenses
const getAllExpenses = async (req, res, next) => {
  try {
    const getAllExpenses = await prisma.expenses.findMany();
    res.status(200).json({ getAllExpenses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
  next();
};

//Getting a single expenses
const singleExpenses = async (req, res, next) => {
  try {
    const id = req.params.id;
    const expenses = await prisma.expenses.findUnique({
      where: {
        id: id,
      },
      include: {
        user: true,
      },
    });
    res.status(200).json({
      expenses,
    });
  } catch (error) {
    console.log(error);
  }
  next();
};

// Deleting an expenses
const deleteExpensesByid = async (req, res, next) => {
  try {
    const { id } = req.params;
    const removeExpenses = await prisma.expenses.delete({
      where: {
        id,
      },
    });
    res
      .status(404)
      .json({ removeExpenses, message: "Expenses has been deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
  next();
};

// Updating an expenses
const updateExpensesByid = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updateExpenses = await prisma.expenses.update({
      where: {
        id,
      },
      data,
    });
    res.status(200).json({ updateExpenses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
  next();
};

// Exportion of modules
module.exports = {
  saveExpenses,
  updateExpensesByid,
  deleteExpensesByid,
  getAllExpenses,
  singleExpenses,
};
