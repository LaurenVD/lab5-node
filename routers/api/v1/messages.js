const express = require('express')
const router = express.Router()
const messagesController = require('../../../controllers/api/v1/messages')

router.get('/', messagesController.getAll)
  
router.get('/:id', (req, res) => {
    res.send("Hello World")
  })
  
router.post('/', (req, res) => {
    res.send("Hello World")
  })
  
router.put('//:id', (req, res) => {
    res.send("Hello World")
  })
  
router.delete('/:id', (req, res) => {
    res.send("Hello World")
  })

module.exports = router