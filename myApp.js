const express = require('express');
const app = express();

require('dotenv').config()

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
})

app.get("/json", (req, res) => {
  const json = { "message": "Hello json" }
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ "message": "HELLO JSON" })
  } else {
    res.json({ "message": "Hello json" })
  }
})

app.use("/public", express.static(__dirname + "/public"))

module.exports = app;