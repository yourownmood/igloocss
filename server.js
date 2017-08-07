const express = require('express')
const path = require('path')
const app = express()

app.set('port', (process.env.PORT || 5000))

app.use(express.static(path.join(__dirname, '/dist')))

app.listen(app.get('port'), function () {
  console.log('Node app is running ' + path.join(__dirname, '/dist') + ', on port', app.get('port'))
})
