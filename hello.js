const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('CI/CD with CircleCI!!!')
})

app.listen(8888, function () {
  console.log('Example app listening on port 8888!')
})
