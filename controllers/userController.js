const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// creating a user
const saveUser = async (req, res, next) => {
  let { fullName, password, email } = req.body;
  try {
    //cheeking if user has already registered
    const existUser = await prisma.user.findFirst({
      where: { email: email },
    });
    if (existUser) {
      res.status(409).json({ message: "The user has already registered" });
    }
    // hashing the password
    const hashingPassword = await bcrypt.hash(password, 10);
    if (hashingPassword) {
      const signUpUser = await prisma.user.create({
        data: {
          fullName,
          password: hashingPassword,
          email,
        },
      });

      res.status(200).json({
        signUpUser,
        message: "User succesfully created",
        user: signUpUser,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
//logging in a user
/*const login = async (req, res, next) => {
  try {
    const email = req.boby.email;
    const password = req.boby.password;
    const users = await prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });
    if (!users) {
      res.status(422).json({
        message: "invalid password",
      });
    } else {
      const token = signToken(users.id);
    }
  } catch (error) {}
};
// Getting a user
const getUsers = async (req, res, next) => {
  try {
    const user = await prisma.user.findMany({});
    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

//Getting a single user
const singleUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        tasks: true,
      },
    });
    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
*/
//Deleting a user
const deleteUserByid = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteUser = await prisma.user.delete({
      where: {
        id,
      },
    });
    res.status(404).json({ deleteUser, message: "User has been deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Updating a user
const updateUserByid = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updateUser = await prisma.user.update({
      where: {
        id,
      },
      data,
    });

    res.status(200).json({ updateUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const getAllUsers = await prisma.user.findMany();
    res.status(200).json({ getAllUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal server error" });
  }
};
module.exports = {
  saveUser,
  getAllUsers,
  updateUserByid,
  deleteUserByid,
};
