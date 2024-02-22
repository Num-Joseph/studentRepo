//Requiring of packages
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");

//const PORT = 3000;
const PORT = process.env.PORT || 3000;
const appRouter = require("./routes/index");

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use("/api", appRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json("Something whent wrong!");
});

// This is where we listen to our server
app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
});
