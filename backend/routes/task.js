const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController')

//!needs auth
router.get('/', taskController.getTasks);
router.post('/create/', taskController.postTask);
router.put('/update/:id', taskController.putTask);
router.delete('/delete/:id', taskController.deleteTask);


module.exports = router