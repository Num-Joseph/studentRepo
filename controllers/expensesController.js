const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// creating an expenses
const saveExpenses = async (req, res, next) => {
  let { itermName, quantity, amount } = req.body; // Corrected variable name
  console.log(itermName);
  try {
    // Calculating total amount
    const totalAmount = quantity * amount;

    // Creating an expense
    const createExpenses = await prisma.expenses.create({
      data: {
        itermName,
        quantity,
        amount,
        totalAmount,
      },
    });
    console.log(createExpenses);
    res.status(201).json({
      createExpenses,
      message: "Successfully created",
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
    });
    if (!expenses) {
      return res.status(404).json({ message: "Expeses not found" });
    }
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
const updateExpense = async (req, res, next) => {
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
// calculating for payments
const getAllPaymentsByDate = async (req, res) => {
  try {
    const date = moment(req.params.date);
    const getAllPaymentDaily = await prisma.payments.findMany({
      where: {
        createdAt: {
          gte: date.startOf("day").toDate(),
          lte: date.endOf("day").toDate(),
        },
      },
    });
    res.status(200).json({ getAllPaymentDaily });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
// calculation for weekly payment
const getAllWeeklyPaymentsByDate = async (req, res) => {
  try {
    const date = moment(req.params.date);
    const startOfWeek = date.clone().startOf("isoWeek");
    const endOfWeek = date.clone().endOf("isoWeek");
    const getAllPaymentWeekly = await prisma.payments.findMany({
      where: {
        createdAt: {
          gte: startOfWeek.toDate(),
          lte: endOfWeek.toDate(),
        },
      },
    });
    res.status(200).json({ getAllPaymentWeekly });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// calculation for monthly payments
const getAllMonthlyPaymentsByDate = async (req, res) => {
  try {
    const date = moment(req.params.date);
    const getAllPaymentMonth = await prisma.payments.findMany({
      where: {
        createdAt: {
          gte: date.startOf("month").toDate(),
          lte: date.endOf("month").toDate(),
        },
      },
    });
    res.status(200).json({ getAllPaymentMonth });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//calculation for yearly payments
const getAllYearlyPaymentsByDate = async (req, res) => {
  try {
    const date = moment(req.params.date);
    const getAllPaymentYearly = await prisma.payments.findMany({
      where: {
        createdAt: {
          gte: date.startOf("year").toDate(),
          lte: date.endOf("year").toDate(),
        },
      },
    });
    res.status(200).json({ getAllPaymentYearly });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Exportion of modules
module.exports = {
  saveExpenses,
  singleExpenses,
  updateExpense,
  deleteExpensesByid,
  getAllExpenses,
  singleExpenses,
  getAllPaymentsByDate,
  getAllWeeklyPaymentsByDate,
  getAllMonthlyPaymentsByDate,
  getAllYearlyPaymentsByDate,
};
