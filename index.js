const connectToMongose = require('./db')
const express = require('express');
const res = require('express/lib/response');

connectToMongose();
const app = express()
const port = 3000

app.use('/api/auth',require('./routes/auth'))
app.use('/api/mcqs',require('./routes/mcqs'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})