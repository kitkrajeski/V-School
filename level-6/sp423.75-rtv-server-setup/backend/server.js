const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const { expressjwt } = require("express-jwt");
require("dotenv").config();

app.use(express.json);
app.use(morgan("dev"));

mongoose.connect(process.env.MONGO_DB_URI, (err) => {
  if (err) console.log(err);
  else console.log("connected to the db");
});

app.use("/auth", require("./routes/authRouter.js"));
app.use(
  "/api",
  expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.listen(9000, () => {
  console.log("server is running on local port 9000");
});
