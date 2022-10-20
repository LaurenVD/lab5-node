// require express router
const express = require('express')
const router = express.Router()
// require the messages controller
const messagesController = require('../controllers/messages')

// get all messages
router.get('/', messagesController.getAll)