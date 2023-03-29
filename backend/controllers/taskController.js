const asyncHandler = require('express-async-handler')

module.exports = {
    getTasks: asyncHandler(async (req, res) => {
        res.send('grab tasks')
    }),
    postTask: asyncHandler(async (req, res) => {
        res.send('create task')
    }),
    putTask: asyncHandler(async (req, res) => {
        res.send('update task')
    }),
    deleteTask: asyncHandler(async (req, res) => {
        res.send('delete task')
    })
}