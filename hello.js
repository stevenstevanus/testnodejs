const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('CI/CD with CircleCI!!! - pm2 restart')
})

app.listen(8888, "0.0.0.0", function () {
  console.log('Example app listening on port 8888!')
})
