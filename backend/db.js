const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/React-Todo')

const TodoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const userTodo = mongoose.model('userTodo', TodoSchema);

module.exports = {
    userTodo
}