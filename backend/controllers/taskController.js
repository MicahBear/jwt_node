module.exports = {
    getTasks: (req, res) => {
        res.send('grab tasks')
    },
    postTask: (req, res) => {
        res.send('create task')
    },
    putTask: (req, res) => {
        res.send('update task')
    },
    deleteTask: (req, res) => {
        res.send('delete task')
    }
}