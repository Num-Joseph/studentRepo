//Requirment of packages
const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

// CRUD operations
router.post("/signUp", userController.saveUser);
router.post("/login", userController.userLogin);
router.get("/:id", userController.getSingleUserById);
router.get("/", userController.getAllUsers);
router.patch("/:id", userController.updateUserByid);
router.delete("/:id", userController.deleteUserByid);

// Expotation of module
module.exports = router;
