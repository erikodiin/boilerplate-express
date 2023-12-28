const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')

const express = require('express');
const app = express();

app.use("/public", express.static(__dirname + "/public"))
app.use(logger)
app.use(bodyParser.urlencoded({extended:false}))

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

app.get('/now', getNow, (req, res) => {
  res.json({"time": req.time})
})

app.route('/:word/echo')
  .get((req, res) => {
    res.json({"echo": req.params.word })
  })

app.get('/name', (req, res) => {
  res.json( { "name": `${req.query.first} ${req.query.last}` } )
})

function logger(req, res, next) {
  console.log(`${req.method} ${__dirname+req.path} - ${req.ip}`)
  next()
  return
}

function getNow(req, res, next) {
  req.time = new Date().toString()
  next()
}



module.exports = app;