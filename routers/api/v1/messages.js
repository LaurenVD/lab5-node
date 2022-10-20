const express = require('express')
const router = express.Router()

app.get('/', (req, res) => {
    res.send("Hello World")
  })
  
  app.get('/:id', (req, res) => {
    res.send("Hello World")
  })
  
  app.post('/', (req, res) => {
    res.send("Hello World")
  })
  
  app.put('//:id', (req, res) => {
    res.send("Hello World")
  })
  
  app.delete('/:id', (req, res) => {
    res.send("Hello World")
  })