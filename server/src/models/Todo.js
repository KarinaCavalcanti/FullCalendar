const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
        select: false
    },
    start: Date,
    end: Date,
    title: String
});

const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;