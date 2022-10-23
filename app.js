const express = require('express')
const app = express()
const port = 3000
const logger = require('./middleware/logger')
const apiV1Messages = require('./routers/api/v1/messages')

app.get('/', (req, res) => {
  res.send(["appel", "peer", "banaan"])
})

app.use('/api/v1/messages', apiV1Messages)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app