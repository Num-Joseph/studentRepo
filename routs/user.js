//Requirment of packages
const express = require("express");

const router = express.Router();

const user = require("../../controllers/user");

// CRUD operations
router.get("/", user.getUser);
router.get("/:id", user.singeUser);
router.post("/", user.saveUser);
router.delete("/:id", user.removeUser);
router.patch("/:id", user.updateUser);

// Expotation of module
module.exports = router;
