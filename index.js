const connectToMongose = require('./db')
const express = require('express');
const res = require('express/lib/response');

connectToMongose();
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Abrar Ahmad')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})