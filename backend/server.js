const express = require('express');
const app = express()
const port = process.env.PORT || 8000
const dotenv = require('dotenv').config()
app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`listening on port ${port} `)
})