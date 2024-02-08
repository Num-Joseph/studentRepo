//Requirment of packages
const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

// CRUD operations
router.post("/createUser", userController.saveUser);
router.get("/getAllUsers", userController.getAllUsers);
router.patch("/updateUser/:id", userController.updateUserByid);
router.delete("/delete/:id", userController.deleteUserByid);

// Expotation of module
module.exports = router;
