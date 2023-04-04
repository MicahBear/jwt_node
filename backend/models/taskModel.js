const mongoose = require('mongoose')



const taskSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Please add title']
    }
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Task', taskSchema)