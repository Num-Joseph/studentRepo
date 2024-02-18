//Requiring of packages
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const PORT = 3000;
const appRouter = require("./routes/index");

app.use(bodyParser.json());
app.use("/api", appRouter);
app.use(cors({ origin: true, credentials: true }));
console.log("test");

// This is where we listen to our server
app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
});
