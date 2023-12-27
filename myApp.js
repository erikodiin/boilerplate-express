const dotenv = require('dotenv').config()

const express = require('express');
const app = express();

app.use(logger)

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
})

app.get("/json", (req, res) => {
  let style = process.env.MESSAGE_STYLE
  if (style === "uppercase") {
    res.json({ "message": "HELLO JSON" })
  } else {
    res.json({ "message": "Hello json" })
  }
})

app.use("/public", express.static(__dirname + "/public"))

function logger(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next()
  return
}

module.exports = app;