// start file can be found on https://expressjs.com/en/starter/hello-world.html

const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})