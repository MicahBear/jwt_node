const asyncHandler = require('express-async-handler')
const Task = require('../models/taskModel')

module.exports = {
    getTasks: asyncHandler(async (req, res) => {
        const tasks = await Task.find()

        res.status(200).json(tasks)
    }),
    postTask: asyncHandler(async (req, res) => {
        if (!req.body.text) {
            res.status(400)
        }

        const task = await Task.create({
            text: req.body.text
        })

        res.status(200).json(task)
    }),
    putTask: asyncHandler(async (req, res) => {
        res.send('update task')
    }),
    deleteTask: asyncHandler(async (req, res) => {
        res.send('delete task')
    })
}