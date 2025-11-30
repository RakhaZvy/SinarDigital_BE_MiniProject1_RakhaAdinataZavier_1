const express = require("express");
const app = express();
const routes = require("./routes/index");
const errorHandler = require("./middlewares/errorHandle");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.use(errorHandler);

module.exports = app;
