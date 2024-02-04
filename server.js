//Requiring of packages
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const PORT = 3000;
const appRouter = require("./routes/index");

app.use(bodyParser.json());
app.use("/api", appRouter);

/*async function hashPassword(password) {
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  } catch (error) {
    console.log("Hashing password error", error);
    throw error;
  }
}

app.get("/", (req, res, next) => {
  res.json({
    message: "Hi, welcome to my expenses app",
  });
});
*/

// This is where we listen to our server
app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
});
