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
        const task = await Task.findById(req.params.id)

        if (!task) {
            res.status(400)
            throw new Error('Task not found')
        }

        const updatedTask = await Task.findByIdandUpdate(req.params.id, req.body, { new: true, })

        res.status(200).json(updatedTask)
    }),
    deleteTask: asyncHandler(async (req, res) => {
        const task = await Task.findById(req.params.id)

        if (!task) {
            res.status(400)
            throw new Error('Task no found: no deletion')
        }
        await task.remove()

        res.status(200).json({ id: req.params.id })
    })
}