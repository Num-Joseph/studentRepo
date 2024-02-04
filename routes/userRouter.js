//Requirment of packages
const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

// CRUD operations
//router.get("/", userController.getUser);
//router.get("/:id", userController.singeUser);
router.post("/createUser", userController.saveUser);
router.get("/getAllUsers", userController.getAllUsers);
router.patch("/updateUser/:id", userController.updateUserByid);
router.delete("/delete/:id", userController.deleteUserByid);

//router.patch("/:id", userController.updateUser);

// Expotation of module
module.exports = router;
