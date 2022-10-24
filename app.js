const express = require('express')
const app = express()
const port = 3000
const logger = require('./middleware/logger')
const apiV1Messages = require('./routers/api/v1/messages')
const indexRouter = require('./routers/index')
const cors = require('cors')

// Found on https://expressjs.com/en/resources/middleware/cors.html
app.use(cors({
  //origin true
  origin: true,
  credentials: true,
  //add methods
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.set('view engine', 'jade');

app.use('/', indexRouter)
app.use('/api/v1/messages', apiV1Messages)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Found on https://expressjs.com/en/resources/middleware/cors.html
module.exports = app