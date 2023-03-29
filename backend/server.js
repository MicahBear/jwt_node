const express = require('express')
const dotenv = require('dotenv').config()
const logger = require('morgan')
const { errorHandler } = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mainRoutes = require('./routes/main')
const taskRoutes = require('./routes/task')
// const userAuth = require('./routes/userAuth')
const PORT = process.env.PORT || 8000
const app = express()


// Logging
app.use(logger("dev"));
app.use(cors())

// Parsing
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// Routes
app.use('/', mainRoutes)
app.use('/task', taskRoutes)
// app.use('/userAuth', userAuth)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT} `)
})