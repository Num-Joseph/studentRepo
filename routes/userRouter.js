//Requirment of packages
const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

// CRUD operations
router.post("/", userController.saveUser);
router.get("/:id", userController.getSingleUserById);
router.get("/", userController.getAllUsers);
router.patch("/:id", userController.updateUserByid);
router.delete("/:id", userController.deleteUserByid);

// Expotation of module
module.exports = router;
