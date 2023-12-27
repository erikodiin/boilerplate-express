const express = require('express');
const app = express();
const dotenv = require('dotenv').config()

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
})

app.get("/json", (req, res) => {
  const json = { "message": "Hello json" }
  if (process.env.MESSAGE_STYLE === "uppercase") json.message = json.message.toUpperCase()

  res.json(json)
})

app.use("/public", express.static(__dirname + "/public"))

module.exports = app;