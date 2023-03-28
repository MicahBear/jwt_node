const express = require('express');
const dotenv = require('dotenv').config()
const mainRoutes = require('./routes/main');
const taskRoutes = require('./routes/task')
// const userAuth = require('./routes/userAuth')
const PORT = process.env.PORT || 8000
const app = express()

app.use('/task', taskRoutes)
app.use('/', mainRoutes)
// app.use('/userAuth', userAuth)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT} `)
})