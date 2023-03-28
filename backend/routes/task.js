const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController')

router.get('/:id', taskController.getTasks);
router.post('/create/:id', taskController.postTask);
router.put('/update/:id', taskController.putTask);
router.delete('/delete/:id', taskController.deleteTask);


module.exports = router