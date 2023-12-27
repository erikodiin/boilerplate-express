const express = require('express');
const app = express();
const dotenv = require('dotenv').config()

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
})

app.get("/json", (req, res) => {
  res.json({"message": (process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json")})
})

app.use("/public", express.static(__dirname + "/public"))

module.exports = app;