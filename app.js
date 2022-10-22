const express = require('express')
const app = express()
const port = 3000
const logger = require('./middleware/logger')
const apiV1Messages = require('./routers/api/v1/messages')
const indexRouter = require('./routers/index')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/lab5');

app.set('view engine', 'jade');

app.use('/', indexRouter);

//json
app.use(express.json());

app.use('/api/v1/messages', apiV1Messages)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})