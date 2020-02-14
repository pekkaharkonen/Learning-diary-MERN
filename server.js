const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv").config();

app.use(morgan("tiny"));

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
